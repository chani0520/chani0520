auto generate(Program*) -> tuple<vector<Code>, map<string, size_t>>;

auto main() -> void {
  string sourceCode = R""""(
    function main() {
      print 'Hello, World!';
    }
  )"""";

  auto tokenList = scan(sourceCode);
  auto systaxTree = parse(tokenList);
  auto objectCode = generate(systaxTree);
  printObjectCode(objectCode);
}