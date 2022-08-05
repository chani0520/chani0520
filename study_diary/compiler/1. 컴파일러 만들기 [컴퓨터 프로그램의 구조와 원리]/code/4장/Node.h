// 부모 문 노드
struct Statement {
  virtual auto interpret() -> void = 0;
}

// 부모 문 노드를 상속받는 모든 문 노드
struct Function: Statement {
  auto interpret() -> void;
}

// 부모 식 노드
struct Expression {
  virtual auto interpret() -> any = 0;
}

// 부모 식 노드를 상속받는 모든 식 노드
struct Or: Expression {
  auto interpret() -> any;
}
