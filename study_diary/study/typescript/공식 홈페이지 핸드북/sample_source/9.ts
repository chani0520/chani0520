enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction.Down); // 2

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
console.log(Direction2.Down); // DOWN

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}
console.log(BooleanLikeHeterogeneousEnum.No); // 0

enum E {
  X,
}
console.log(E.X);

enum E1 {
  X,
  Y,
  Z,
}
console.log(E1.Y); // 1

enum E2 {
  A = 1,
  B,
  C,
}
console.log(E2.B); // 2

enum FileAccess {
  // 상수 멤버
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // 계산된 멤버
  G = '123'.length,
}
console.log(
  FileAccess.None, // 0
  FileAccess.Read, // 2
  FileAccess.Write, // 4
  FileAccess.ReadWrite, // 6
  FileAccess.G // 3
);

enum ShapeKind {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
let c: Circle = {
  // kind: ShapeKind.Square, 'ShapeKind.Square' 형식은 'ShapeKind.Circle' 형식에 할당할 수 없습니다.ts(2322)
  kind: ShapeKind.Circle,
  radius: 100,
};

enum E2 {
  Foo,
  Bar,
}

function f(x: E2) {
  if (x !== E2.Foo || x !== E2.Bar) {
    //                ~~~~~~~~~~~~
    // 에러! E 타입은 Foo, Bar 둘 중 하나이기 때문에 이 조건은 항상 true를 반환합니다.
  }
}

enum E3 {
  X,
  Y,
  Z,
}
console.log(E3.X);
function fx(obj: { X: number }) {
  console.log(obj);
  return obj.X;
}
fx(E3);

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log('Log level key is: ', key);
    console.log('Log level value is: ', num);
    console.log('Log level message is: ', message);
  }
}
printImportant('ERROR', 'This is a message');

enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

enum TEST {
  A = 'CHAN',
  B = 'KIM',
}
console.log(TEST); // { A: 'CHAN', B: 'KIM' }
enum TEST1 {
  A,
}
console.log(TEST1); // { '0': 'A', A: 0 }

const enum Enum3 {
  A = 1,
  B = A * 2,
}

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}
let direction = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
// ======> var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
