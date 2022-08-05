auto main() -> void {
  string sourceCode = R""""(
    function main() {
      print 'Hello, World!';
    }
  )"""";

  auto tokenList = scan(srouceCode); // 2장 어휘 분석
  auto syntaxTree = parse(tokenList); // 3장 구문 분석
  auto objectCode = generate(syntaxTree); // 5장 컴파일러

  execute(objectCode); // 6장 가상머신
}