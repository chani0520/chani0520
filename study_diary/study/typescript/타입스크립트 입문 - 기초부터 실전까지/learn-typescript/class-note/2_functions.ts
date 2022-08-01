// 함수의 파라미터의 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(10, 20);

// 함수의 반환 값(return값)에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식(매개변수에 타입 정의 + return값에 타입 정의)
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20);

/**
 * 함수의 옵셔널 파라미터(?)
 * `?:`를 통해 두번째 인자는 매개변수로 받지 않아도 됨을 의미
 */
function log(a: string, b?: string) {}
log('hello world');
log('hello ts', 'abc');

/**
 * function sum(a:number, b?:number): nubmer {
 *  return a+b;
 * }
 * sum(10, 20);
 * sum(10);
 */
