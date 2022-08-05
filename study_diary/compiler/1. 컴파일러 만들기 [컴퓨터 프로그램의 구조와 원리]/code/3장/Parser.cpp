static vector<Token>::iterator current;

auto parse(vector<Token> tokens) -> Program* {
  auto result = new Program();
  current = tokens.begin();
  while(current -> kind != Kind::EndOfToken) {
    switch ( current -> kind ) {
      default:
        cout << *current << " 잘못된 구문입니다.";
        exit(1);
      
      // 현재 토큰이 Function이라면, parseFunction() 함수를 호출해 함수의 정의를 분석하고 반환받은 함수 노트를
      // 프로그램 노드에 추가한다.
      case Kind::Function: {
        result -> functions.push_back(parseFunction());
        break;
      }
    }
  }
  return result;
}

// 
auto parseFunction() -> Function* {
  auto result = new Function();
  skipCurrent(Kind::Function);

  result -> name = current => string;
  skipCurrent(Kind::Identifier);

  // 매개변수 목록 : 괄호나 콤마 같은 구분자는 스킵하며, 매개변수들의 이름을 함수 노드의 매개변수 리스트에 추가
  skipCurrent(Kind::LeftParen);
  if ( current -> kind != Kind::RightParen ) {
    do {
      result -> parameters.push_back(current -> string);
      skipCurrent(Kind::Identifier); 
    } whild (skipCurrentIf(Kind::Comma));
  }
  skipCurrent(Kind::RightParen);

  // 함수의 본문 : 함수의 본문은 앞뒤 괄호 건너뛰고, 본문을 분석하는 parseBlock()호출 후, 반환받은 본문의 문 리스트를 함수 노드에 저장
  skipCurrent(Kind::LeftBrace):
  result -> block = parseBlock();
  skipCurrent(Kind::RightBrace);
  
  return result;
}

auto skipCurrent(Kind kind) -> void {
  if ( current -> kind != kind ) {
    cout << toString(kind) + " 토큰이 필요합니다.";
    exit(1);
  }

  current++;
}

auto parseBlock() -> vector<Statement*> {
  vector<Statement*> result;
  while ( current -> kind != Kind::RightBrace ) {
    switch ( current -> kind ) {
      case Kind::EndOfToken:
        cout << *current << " 잘못된 구문입니다.";
        exit(1);
      
      case Kind:Variable:
        result.push_back(parseVariable());
        break;

      default:
        result.push_back(parseExpressionStatement());
        break;
    }
  }

  return result;
}

auto parseVariable() -> Variable* {
  auto result = new Variable();
  skipCurrent(Kind::Variable);

  result -> name = current -> string;
  skipCurrent(Kind::Identifier);

  skipCurrent(Kind::Assignment);
  result -> expression = parseExpression();

  skipCurrent(Kind::Semicolon);
  
  return result;
}

auto parseExpressionStatement() -> ExpressionStatement* {
  auto result = new ExpressionStatement();
  result -> expression = parseExpression();
  skipCurrent(Kind::Semicolon);

  return result;
}

auto parseExpression() -> Expression* {
  return parseAssignment();
}

auto parseAssignment() -> Expression* {
  auto result = parseOr();

  if ( current -> kind != Kind::Assignment ) {
    return result;
  }

  skipCurrent(Kind::Assignment);

  // 왼쪽의 식이 변수의 참조를 표현하는 GetVariable 노드인지 확인
  if ( auto getVariable = dynamic_cast<GetVariable*>(result) ) {
    auto result = new SetVariable();
    result -> name = getVariable -> name;
    result -> value = parseAssignment();

    return result;
  }

  // 왼쪽의 식이 원소(배열 or 맵)의 참조를 표현하는 GetElement 노드인지 확인
  if (auto getElement = dynamic_cast<GetElement*>(result)) {
    auto result = new SetElement();
    result->sub = getElement->sub;
    result->index = getElement->index;
    result->value = parseAssignment();
    return result;
  }

  cout << "잘못된 대입 연산 식입니다.";
  exit(1);
}

auto parseOr()->Expression* {
  auto result = parseAnd();
  while (skipCurrentIf(Kind::LogicalOr)) {
    auto temp = new Or();
    temp->lhs = result;
    temp->rhs = parseAnd();
    result = temp;
  }
  return result;
}