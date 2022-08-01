auto parse(vector<Token>) -> Program*;
auto main() -> void {
  string sourceCode = R""""(
    function main() {
      printLine 'Hello, world!';
      printLine 1 + 2 * 3;
    }
  )"""";
  auto tokenList = scan(sourceCode);

  // 구문 분석기는 토큰 리스트를 입력받아 구문트리를 출력
  auto syntaxTree = parse(tokenList);

  printSyntaxTree(syntaxTree);
}