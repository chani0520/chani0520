// declare function greet(name: string): void;

// greet(42);

// -------------------------------------------------------------------------------- //

// // 아래 코드에는 타입 표기가 전혀 없지만, TS는 버그를 감지할 수 있다
// const names = ['Alice', 'Bob', 'Eve'];

// // 함수에 대한 문맥적 타입 부여
// names.forEach(function (s) {
//   console.log(s.toUppercase());
//   //            ~~~~~~~~~~~
//   // 'toUppercase' 속성이 'string' 형식에 없습니다. 'toUpperCase'을(를) 사용하시겠습니까?ts(2551)
// });

// // 화살표 함수에도 문맥적 타입 부여는 적용
// names.forEach((s) => {
//   console.log(s.toUppercase());
//   //            ~~~~~~~~~~~
//   // 'toUppercase' 속성이 'string' 형식에 없습니다. 'toUpperCase'을(를) 사용하시겠습니까?ts(2551)
// });

// -------------------------------------------------------------------------------- //

// // 매개 변수의 타입은 객체로 표기되고 있다.
// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is", pt.x);
//   console.log("The coordinate's y value is", pt.y);
// }

// printCoord({ x: 3, y: 7 });
// // The coordinate's x value is 3
// // The coordinate's y value is 7

// -------------------------------------------------------------------------------- //

// function printName(obj: { first: string; last?: string }) {
//   console.log(`${obj.first} ${obj.last}`);
// }

// printName({ first: 'Chan' });
// printName({ first: 'Chan', last: 'Kim' });

// function printName(obj: { first: string; last?: string }) {
//   //   console.log(obj.last.toUpperCase());
//   //   TSError: ⨯ Unable to compile TypeScript:
//   //   sample_source/3.ts(46,15): error TS2532: Object is possibly 'undefined'.

//   if (obj.last !== undefined) {
//     console.log(obj.last.toUpperCase()); // KIM
//   }

//   console.log(obj.last?.toUpperCase()); // KIM
// }

// printName({ first: 'Chan', last: 'Kim' });

// -------------------------------------------------------------------------------- //

// function printId(id: number | string) {
//   console.log('Your ID is :', id);
// }

// printId(101);

// printId('202');

// printId({ myId: 22342 });
// //      ~~~~~~~~~~~~~~~
// // '{ myId: number; }' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.

// function printId(id: number | string) {
//   console.log(id.toUpperCase());
//   //             ~~~~~~~~~~~
//   // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
//   // 'number' 형식에 'toUpperCase' 속성이 없습니다.ts(2339)
// }

// function printId(id: number | string) {
//   if (typeof id === 'string') {
//     // 이 분기에서 id는 'string' 타입을 가짐
//     console.log(id.toUpperCase());
//   } else {
//     // 여기에서 id는 'number' 타입을 가짐
//     console.log(id);
//   }
// }

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // 여기에서 'x'는 'string[]' 타입
//     console.log('Hello, ' + x.join(' and '));
//   } else {
//     // 여기에서 'x'는 'string' 타입
//     console.log('Welcome lone traveler ' + x);
//   }
// }

// // 반환 타입은 'number[] | string'으로 추론됨
// function getFirstThree(x: number[] | string) {
//   return x.slice(0, 3);
// }

// -------------------------------------------------------------------------------- //

// type Point = {
//   x: number;
//   y: number;
// };

// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is", pt.x);
//   console.log("The coordinate's y value is", pt.y);
// }

// printCoord({ x: 101, y: 202 });
// // The coordinate's x value is 101
// // The coordinate's y value is 202

// declare function getInput(): string;
// declare function sanitize(str: string): string;

// type UserInputSanitizedString = string;

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }

// // 보안 처리를 마친 입력을 생성
// let userInput = sanitizeInput(getInput());

// // 새로운 문자열을 다시 대입할 수도 있다.
// userInput = 'new input';

// -------------------------------------------------------------------------------- //

// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is", pt.x);
//   console.log("The coordinate's y value is", pt.y);
// }

// printCoord({ x: 100, y: 100 });
// // The coordinate's x value is 100
// // The coordinate's y value is 100

// type Window = {
//   // ~~~~~~
//   // 'Window' 식별자가 중복되었습니다.ts(2300)
//   title: string;
// };

// type Window = {
//   // ~~~~~~
//   // 'Window' 식별자가 중복되었습니다.ts(2300)
//   ts: TypeScriptAPI;
//   //  ~~~~~~~~~~~~~
//   // 'TypeScriptAPI' 이름을 찾을 수 없습니다.ts(2304)
// };

// -------------------------------------------------------------------------------- //

// const x = 'hello' as number;
// //         ~~~~~~~~~~~~~~~~
// // 'string' 형식을 'number' 형식으로 변환한 작업은 실수일 수 있습니다. 두 형식이 서로 충분히 겹치지 않기 때문입니다.
// // 의도적으로 변환한 경우에는 먼저 'unknown'으로 식을 변환합니다.

// -------------------------------------------------------------------------------- //

let changingString = 'Hello World';
changingString = 'Chan Kim';
// 변수 `changingString`은 어떤 문자열이든 모두 나타낼 수 있으며,
// 이는 TS의 타입 시스템에서 문자열 타입 변수를 다루는 방식과 동일
changingString;
//   let changingString: string

const constantString = 'Hello World';
// 변수 `constantString`은 오직 단 한 종류의 문자열만 나타낼 수 있으며,
// 이는 리터럴 타입의 표현 방식
constantString;
//   const constantString: "Hello World"

let x: 'hello' = 'hello';
x = 'hello';

x = 'howdy';
// '"howdy"' 형식은 '"hello"' 형식에 할당할 수 없습니다.ts(2322)

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // ...
}

printText('Hello World', 'left');
printText("G'day, mate", 'centre');
//                       ~~~~~~~~
// '"centre"' 형식의 인수는 '"left" | "right" | "center"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  // ...
}
configure({ width: 100 });
configure('auto');
configure('automatic');
//         ~~~~~~~~~~
// '"automatic"' 형식의 인수는 'Options | "auto"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
