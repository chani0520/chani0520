// 구문 트리를 순회하기 위한 가상 함수 generate()
struct Statement {
  virtual auto generate() -> void = 0;
}

struct Function: Statement {
  auto generate() -> void;
}

struct Expression {
  virtual auto generate() -> void = 0;
}

struct Or: Expression {
  auto generate() -> void;
}