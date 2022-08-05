/**
 * 제네릭의 Hello World (Hello World of Generics)
 */
/*
function identity(arg: number): number {
  return arg;
}
console.log(identity(3));
*/
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>('myString');
console.log(output);

/**
 * 제네릭 타입 변수 작업 (Working with Generic Type Variables)
 */
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length); // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
  return arg;
}
// => 제네릭함수 loggingIdentity는 타입 매개변수 T와 T배열인 인수 arg를 취하고, T배열을 반환한다.

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // 배열은 .length를 가지고 있습니다. 따라서 오류는 없습니다.
  return arg;
}

/**
 * 제네릭 타입 (Generic Types)
 */
function identity2<T>(arg: T): T {
  return arg;
}
let myIdentity: <T>(arg: T) => T = identity2;

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
  return arg;
}

let myIdentity3: GenericIdentityFn = identity;

/**
 * 제네릭 클래스 (Generic Classes)
 */
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
/*
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
*/

/**
 * 제네릭 제약조건 (Generic Constraints)
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 이제 .length 프로퍼티가 있는 것을 알기 때문에 더 이상 오류가 발생하지 않습니다.
  return arg;
}

/**
 * 제네릭 제약조건에서 타입 매개변수 사용 (Using Type Parameters in Generic Constraints)
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// getProperty(x, 'm'); '"m"' 형식의 인수는 '"a" | "b" | "c" | "d"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

/**
 * 제네릭에서 클래스 타입 사용 (Using Class Types in Generics)
 */
function create<T>(c: { new (): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // 타입검사!
createInstance(Bee).keeper.hasMask; // 타입검사!

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}

for (var i = 0; i < 10; i++) {
  // 현재 값으로 함수를 호출시켜
  // 현재 상태의 'i'를 잡아둔다.
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  })(i);
}
