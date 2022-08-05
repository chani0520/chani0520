// 함수 노드의 리스트를 멤버로 가지는 프로그램 노드
struct Program { 
  vector<struct Function*> functions;
};

// 모든 문 || 식 노드의 부모가 될 노드
struct Statement {}; // 문
struct Expression {}; // 식

// 함수의 정의를 표현하는 노드
struct Function: Statement {
  string name; // 함수 이름
  vector<string> parameters; // 매개변수 이름 리스트
  vector<Statement*> block; // 실행할 문 리스트
};

// return문을 표현하는 노드 ( 반환식을 멤버로 가짐 )
struct Return: Statement {
  Expression* expression; 
};

// 변수의 선언을 표현하는 노드 ( 변수 이름, 초기화식을 멤버로 가짐 )
struct Variable: Statement {
  string name;
  Expression* expression;
};

// for문을 표현하는 노드 ( 변수 선언, 조건식, 증감식, 실행할 문 리스트를 멤버로 가짐 )
struct For: Statement {
  Variable* variable; // 변수 선언
  Expression* condition; // 조건식
  Expression* expression; // 증감식
  vector<Statement*> block; // 실행할 문 리스트
};

// break, continue문을 표현하는 노드 
struct Break: Statement {};
struct Continue: Statement {};

// if문을 표현하는 노드 ( 조건식 리스트, 각 조건식의 결과가 참일때 실행할 문 리스트의 리스트, 거짓일때 싱핼할 문 리스트를 멤버로 가짐 )
struct If: Statment {
  vector<Expression*> conditions;
  vector<vector<Statement*>> blocks;
  vector<Statement*> elseBlock;
};

// print문 & printLine문을 표현하는 노드
struct Print: Statement {
  bool lineFeed = false;
  vector<Expression*> arguments;
}

// 식의 문
// ** 예를 들어, 1) 문에 포함되지 않는 식인 1+2의 결과값 3은 그저 결과값일 뿐...
//             2) 반환값이 있는 함수를 호출했지만, 반환값을 사용하지 않는 경우...
//    ==> 이렇게 소비되지 않는 식의 결과값을 임의로 소비시키기 위해 식을 감싸는 문 노드가 필요
struct ExpressionStatement: Statement {
  Expression* expression;
};

// Or & And를 표현하는 노드 ( 두개 모두 이항연산자, '왼쪽 식(left hand side)'과 '오른쪽 식(right hand side)'를 멤버로 가짐 )
struct Or: Expression {
  Expression* lhs; // 
  Expression* rhs;
};
struct And: Expression {
  Expression* lhs;
  Expression* rhs;
};

// 관계 연산자 & 산술 연산자를 표현하는 노드 ( 연산자의 종류, 이항연산자이므로 왼쪽식과 오른쪽식을 멤버로 가짐 )
struct Relational: Expression {
  Kind kind;
  Expression* lhs;
  Expression* rhs;
};
struct Arithmetic: Expression {
  Kind kind;
  Expression* lhs;
  Expression* rhs;
};

// 단항 연산자를 표현하는 노드 ( 연산자의 종류(절대값을 구하는 '+'연산자, 부호를 반전하는 '-'연산자), 하나의 피연산자 식을 멤버로 가짐 )
struct Unary: Expression {
  Kind kind;
  Expression* sub;
};

// 식에서 함수의 호출을 표현 ( 피연산자 식과 인자식 리스트를 멤버로 가짐, add(1,2)와 같은 식을 표현 )
struct Call: Expression {
  Expression* sub;
  vector<Expression*> arguments;
};

// 배열과 맵의 원소의 참조를 표현 ( 피연산자 식과 인덱스 식을 멤버로 가짐 )
struct GetElement: Expression {
  Expression* sub;
  Expression* index;
};

// 배열의 맵과 원소의 수정을 표현 ( 피연산자 식, 인덱스 식, 초기화식을 멤버로 가짐, array[0] = 3;이나 map['property']=3;과 같은 식을 표현 )
struct SetElement: Expression {
  Expression* sub;
  Expression* index;
  Expression* value;
};

// 변수의 참조를 표현 ( 변수의 이름을 멤버로 가짐 )
struct GetVariable: Expression {
  string name;
};

// 변수의 수정을 표현 ( 변수의 이름과 초기화식을 멤버로 가짐 )
struct SetVariable: Expression {
  string name;
  Expression* value;
};

// 널 리터럴, 불리언 리터럴, 숫자 리터럴, 스트링 리터럴
struct NullLiteral: Expression {};
struct BooleanLiteral: Expression {
  bool value = false;
};
struct NumberLiteral: Expression {
  double value = 0.0;
};
struct StringLiteral: Expression {
  string value;
};

// 배열 리터럴을 표현하는 노드 ( 원소식 리스트를 멤버로 가지고, [1,2,3]과 같은 리터럴 값을 표현 )
struct ArrayLiteral: Expression {
  vector<Expression*> values;
};

// 맵 리터럴을 표현하는 노드 ( 문자열과 원소식을 쌍으로 하는 맵을 멤버로 가짐 )
struct MapLiteral: Expression {
  map<string, Expression*> values;
};