// 함수의 이름과 함수 노드를 키와 값으로 가짐
static map<string, Function*> functionTable;

// extern은 다른 cpp파일에 선언된 전역변수를 참조하겠다는 뜻이고
// 내장함수의 이름과 내장함수 식을 키와 값으로 가진다. 
extern map<string, function<any(vector<any>)>> builtinFunctionTable;

// 전역변수
static map<string, any> global;

// 지역변수
// 바깥쪽의 리스트 : 함수의 블럭
// 안쪽의 리스트 : for, if문 같은 문의 블럭 ( 맵에는 변수의 이름과 값을 저장 )
static list<list<map<string, any>>> local;

// 구문 트리의 루트노드이자 소스코드의 선언 영역을 표현하는 프로그램 노드를 인자로 받는 interpret()
auto interpret(Program* program) -> void {
  for ( auto& node: program -> functions ) 
    functionTable[node->name] = node; // 함수 노드들을 functionTable 변수에 등록

  if ( functionTable["main"] == nullptr )
    return;

  try {
    local.emplace_back().emplace_front();
    // 엔트리 포인트 함수 호출
    functionTable["main"]->interpret();
  } catch ( ReturnException e ) {
    local.pop_back();
  }
}

// 함수의 실행은 본문의 노드를 순회하는 것이 전부
auto Function::interpret()->void {
  for (auto& node: block)
    node->interpret();
}

// 변수의 선언
auto Variable::interpret()->void {
  local.back().front()[name] = expression->interpret();
}

// 변수의 참조 ( 변수의 이름을 키로 local 전역변수를 검색 )
auto GetVariable::interpret()->any {
  for (auto& variables: local.back()) {
    if (variables.count(name))
      return variables[name];
  }

  // 지역변수에서 찾지 못하면 전역변수로 간주해 global에서 검색
  if (global.count(name))
    return global[name];

  // 그렇지 못하면 사용자 정의 함수내에서 찾고 그렇지 못하면 내장 함수에서 검색한다.
  if (functionTable.count(name))
    return functionTable[name];
  if (builtinFunctionTable.count(name))
    return builtinFunctionTable[name];
  return nullptr;
}

// 변수값 수정 ( 변수의 이름을 키로 검색하고 기존의 저장된 값을 식의 반환값으로 바꿔줌 )
auto SetVariable::interpret()->any {
  for (auto& variables: local.back()) {
    if (variables.count(name))
      return variables[name] = value->interpret();
  }

  // local전역변수에서 선언을 찾지 못하면 global 전역변수에서 값을 바꾸거나 새로 등록
  return global[name] = value->interpret();
}

auto GetElement::interpret()->any {
  auto object = sub->interpret();
  auto index_ = index->interpret();
  if (isArray(object) && isNumber(index_))
    return getValueOfArray(object, index_);
  if (isMap(object) && isString(index_))
    return getValueOfMap(object, index_);
  return nullptr;
}

auto SetElement::interpret()->any {
  auto object = sub->interpret();
  auto index_ = index->interpret();
  auto value_ = value->interpret();
  if (isArray(object) && isNumber(index_))
    return setValueOfArray(object, index_, value_);
  if (isMap(object) && isString(index_))
    return setValueOfMap(object, index_, value_);
  return nullptr;
}

// 논리연산, 양쪽의 피연산자 식의 결과중 하나라도 참이라면 식 전체의 결과가 참 ( 왼쪽식부터 평가해서 결과 도출 가능 )
auto Or::interpret()->any {
  return isTrue(lhs->interpret()) ? true : rhs->interpret();
}

// 논리연산, 왼쪽식의 결과가 거짓이면 거짓 반환, 참이라면 오른쪽 식의 결과 반환하면 됨
auto And::interpret()->any {
  return isFalse(lhs->interpret()) ? false : rhs->interpret();
}

// print문 노드가 가진 식 노드들을 순회하며 interpret()함수 호출
auto Print::interpret()->void {
  for (auto& node: arguments) {
    auto value = node->interpret();
    cout << value;
  }
  if (lineFeed) cout << endl;
}

// 노드가 가진 문자열 값만 반환하면 됨
auto StringLiteral::interpret()->any {
  return value;
}

// 산술연산 ( 양쪽 식 노드 순회하며 두 피연산자의 값 구함 => 연산의 결과값을 반환 )
auto Arithmetic::interpret()->any {
  auto lValue = lhs->interpret();
  auto rValue = rhs->interpret();
  if (kind == Kind::Add && isNumber(lValue) && isNumber(rValue)) {
    return toNumber(lValue) + toNumber(rValue);
  }
  if (kind == Kind::Add && isString(lValue) && isString(rValue)) {
    return toString(lValue) + toString(rValue);
  }
  if (kind == Kind::Subtract && isNumber(lValue) && isNumber(rValue)) {
    return toNumber(lValue) - toNumber(rValue);
  }
  if (kind == Kind::Multiply && isNumber(lValue) && isNumber(rValue)) {
    return toNumber(lValue) * toNumber(rValue);
  }
  if (kind == Kind::Divide && isNumber(lValue) && isNumber(rValue)) {
    return toNumber(rValue) == 0 ? 0.0 : toNumber(lValue) / toNumber(rValue);
  }
  if (kind == Kind::Modulo && isNumber(lValue) && isNumber(rValue)) {
    return toNumber(rValue) == 0 ? toNumber(lValue) : fmod(toNumber(lValue), toNumber(rValue));
  }
  return 0.0;
}

// for문
auto For::interpret()->void {
  // 블럭을 먼저 생성한 후, 제어변수를 등록해야 함
  local.back().emplace_front();
  variable->interpret();
  while (true) {
    // 무한루프 안에서 조건식이 거짓이 아닐때까지 반복한다.
    auto result = condition->interpret();
    if (isTrue(result) == false)
      break;
    try {
      for (auto& node: block)
        node->interpret();
    } catch (ContinueException) {
      /* empty */
    } catch (BreakException) {
      break;
    }
    expression->interpret();
  }
  local.back().pop_front(); // 본문을 반복해서 실행하다가 본문의 실행이 끝나면 앞서 생성했던 문 블럭을 제거
}

// if문
auto If::interpret()->void {
  // conditions.size() = 조건식의 갯수만큼 반복
  for (size_t i = 0; i < conditions.size(); i++) {
    // 조건식을 판단해 해당 결과가 거짓이면 continue;
    auto result = conditions[i]->interpret();
    if (isTrue(result) == false)
      continue;

    // 조건식이 true라면, if문 또는 elif문은 각각 문 블럭을 가지므로 본문을 실행하기 전에 문 블럭을 먼저 생성
    local.back().emplace_front();
    for (auto& node: blocks[i])
      node->interpret();

    // 본문 수행이 완료된 후에는 생성했던 문 블럭 제거
    local.back().pop_front();
    return;
  }

  // 선 모든 조건식의 결과가 거짓일때 else절이 없다면 if문의 실행을 종료
  if (elseBlock.empty())
    return;

  // else절 또한 문 블럭을 가지기 때문에, 순회하기 전에 문 블럭을 생성하고 끝나면 제거한다.
  local.back().emplace_front();
  for (auto& node: elseBlock)
    node->interpret();
  local.back().pop_front();
}

struct ContinueException {};
auto Continue::interpret() -> void {
  throw COntinueException();
}

struct BreakException {};
auto Break::interpret()->void {
  throw BreakException();
}

// 함수의 호출을 표현하는 노드
auto Call::interpret()->any {
  auto value = sub->interpret();
  // 피연산자식 노드의 결과가 내장함수인지 확인
  if (isBuiltinFunction(value)) {
    vector<any> values;
    // 인자식 노드들을 순회해서 인자값들을 리스트에 담고, 인자값 리스트와 함께 내장 함수를 호출한 후 반환된 값을 그대로 반환
    for (size_t i = 0; i < arguments.size(); i++)
      values.push_back(arguments[i]->interpret());
    return toBuiltinFunction(value)(values);
  }

  // 피연사자 식 노드의 반환값이 함수 노드가 아니라면 null을 반환
  if (isFunction(value) == false)
    return nullptr;
  map<string, any> parameters;

  // 인자식 노드 리스트를 순회해 인자값들을 구하고, 매개 변수의 이름과 인자값을 매핑시켜 보관한다. 
  for (size_t i = 0; i < arguments.size(); i++) {
    auto name = toFunction(value)->parameters[i];
    parameters[name] = arguments[i]->interpret();
  }

  // 함수 블럭 생성
  local.emplace_back().push_front(parameters);
  try {
    // 함수 블럭에 인자값들을 넣어놓고 함수를 호출
    toFunction(value)->interpret();
  } catch (ReturnException exception) {
    local.pop_back();
    return exception.result;
  }
  local.pop_back();
  return nullptr;
}

struct ReturnException { 
  any result; 
};
auto Return::interpret() -> void {
  // 반환값 식 노드를 순회한 결과값을 인자로 예외 객체 생성
  throw ReturnException{expression->interpret()};
}

// 배열리터럴
auto ArrayLiteral::interpret()->any {
  auto result = new Array();
  for (auto& node: values)
    result->values.push_back(node->interpret());
  return result;
}

auto MapLiteral::interpret()->any {
  auto result = new Map();
  for (auto& [key, value]: values)
    result->values.insert_or_assign(key, value->interpret());
  return result;
}