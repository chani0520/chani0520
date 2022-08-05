/**
 * 첫 번째 인터페이스 (Our First Interface)
 */
// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

/**
 * 선택적 프로퍼티 (Optional Properties)
 */
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: 'black' });
console.log(mySquare);

/**
 * 읽기전용 프로퍼티 (Readonly properties)
 */
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 5, y: 10 };
// p1.x = 7;
// 읽기 전용 속성이므로 'x'에 할당할 수 없습니다.ts(2540)

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; 'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.
// ro.push(5); 'readonly number[]' 형식에 'push' 속성이 없습니다.
// ro.length = 100; 읽기 전용 속성이므로 'length'에 할당할 수 없습니다.ts(2540)
// a = ro; 'readonly number[]' 형식은 'readonly'이며 변경 가능한 형식 'number[]'에 할당할 수 없습니다.ts(4104)
a = ro as number[];

/**
 * 함수 타입
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
// mySearch = function (src: string, sub: string) {
//   let result = src.search(sub);

//   return result > -1;
// };
mySearch = function (src, sub) {
  let result = src.search(sub);

  return result > -1;
};

/**
 * 인덱서블 타입
 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  // [x: number]: Animal; 'number' 인덱스 유형 'Animal'을(를) 'string' 인텍스 유형 'Dog'에 할당할 수 없습니다.ts(2413)
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray2[2] = 'Mallory'; 'ReadonlyStringArray' 형식의 인덱스 시그니처는 읽기만 허용됩니다.ts(2542)

/**
 * 클래스 타입
 */
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   setTime(d: Date) {
//     this.currentTime = d;
//   }

//   constructor(h: number, m: number) {}
// }

// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// // 클래스가 인터페이스를 구현할때, 클래스의 인스턴스만 검사하기 때문. 생성자가 static이기 때문에, 이 검사에 포함되지 않음
// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick(): void {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/**
 * 인터페이스 확장하기 (Extending Interface)
 */
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
square.sideLength = 5.0;

/**
 * 하이브리드 타입 (Hybrid Types)
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};

  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

/**
 * 클래스를 확장한 인터페이스 (Interfaces Extending Classes)
 */
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}

class Image implements SelectableControl {
  private state: any;
  select() {}
}

class Location {}
