auto interpret(Program*) -> void;

auto main() -> void {
  string sourceCode = R""""(
    function main() {
      // p83
      print 'Hello, World!';

      // p84
      print 1 * 2 + 3 * 4;

      // p86
      printLine true or 'Hello, World!'; // => true
      printLine false or 'Hello, World!'; // => Hello, World!
      printLine true and 'Hello, World!'; // => Hello, World!
      printLine false and 'Hello, World!'; // => false

      // p89~90
      global = 4;
      val local = 13;
      global = local = 7;
      printLine 'global : ', global; // => global : 7
      printLine 'local : ', local; // => local : 7

      // p92
      for i=0, i<3, i=i+1 {
        printLine 'i: ', i; 
                              // i: 0
                              // i: 1
                              // i: 2
      }

      // p94
      for i=0, i<5, i=i+1 {
        if i==1 {
          printLine 'one';
        } elif i=2 {
          printLine 'two';
        } elif i=3 {
          printLine 'three';
        } else {
          printLine i;
        }
      }
      // 0
      // one
      // two
      // three
      //4

      // p96
      for i=0, i<3, i=i+1 {
        if i == 1 {
          continue;
        }
        printLine 'i: ', i;
      }
      // i: 0
      // i: 2

      // p98
      sayHoHoHo(); // Ho! Ho! Ho!

      // p100 
      add(1,3); // 4

      // p101
      print getC(3, 4); // 25 

      // p104
      print sqrt(getC(3, 4)); // 5 ( sqrt라는 내장함수 호출 )

      // p105
      print [1, 2, 3]; // [1 2 3]

      // p107
      print['first', 'second', 'third'][1]; // second

      // p108
      var array = ['first', 'second', 'third'];
      array[1] = '2nd';
      printLine array[1]; // 2nd
    }

    function sayHoHoHo() {
      print 'Ho! Ho! Ho!'; 
    }

    function add(a, b) {
      print a + b;
    }

    function getC(a, b) {
      return a * a + b * b;
    }
  )"""";

  auto tokenList = scan(sourceCode);
  auto syntaxTree = parse(tokenList);

  interpret(systaxTree);
}