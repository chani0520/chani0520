auto isString(any value)->bool {
  return value.type() == typeid(string);
}

auto toString(any value)->string {
  return any_cast<string>(value);
}

auto operator<<(ostream& stream, any& value)->ostream& {
  if (isNull(value)) {
    stream << "null";
  }
  else if (isBoolean(value)) {
    stream << boolalpha << any_cast<bool>(value);
  }
  else if (isNumber(value)) {
    printf("%g", toNumber(value));
  }
  else if (isString(value)) {
    stream << toString(value);
  }

  // 배열의 경우, [1 2 3]과같이 출력되도록 작성됨
  else if (isArray(value)) {
    stream << "[ ";
    for (auto& value : toArray(value)->values)
      stream << value << " ";
    stream << "]";
  }
  else if (isMap(value)) {
    stream << "{ ";
    for (auto& [key, value] : toMap(value)->values)
      stream << key << ":" << value << " ";
    stream << "}";
  }
  return stream;
}

// any타입의 값의 데이터 타입이 함수의 호출을 표현하는 노드인지 확인
auto isFunction(any value)->bool {
  return value.type() == typeid(Function*);
}

auto toFunction(any value)->Function* {
  return any_cast<Function*>(value);
}

// 매개변수로 받은 any타입의 값의 데이터 타입이 내장함수인지 확인
auto isBuiltinFunction(any value)->bool {
  return value.type() == typeid(function<any(vector<any>)>);
}

auto toBuiltinFunction(any value)->function<any(vector<any>)> {
  return any_cast<function<any(vector<any>)>>(value);
}

// 매개변수로 받은 배열에서 매개변수로 받은 인덱스에 해당하는값을 반환
auto getValueOfArray(any object, any index)->any {
  auto i = static_cast<size_t>(toNumber(index));
  if (i >= 0 && i < toArray(object)->values.size())
    return toArray(object)->values[i];
  return nullptr;
}

// 대입연산자는 대입한 값을 결과값으로 남기므로 배열의 원소에 저장한 값을 반환
auto setValueOfArray(any object, any index, any value)->any {
  auto i = static_cast<size_t>(toNumber(index));
  if (i >= 0 && i < toArray(object)->values.size())
    toArray(object)->values[i] = value;
  return value;
}
