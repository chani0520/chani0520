/**
 * 리터럴 타입 좁히기 (Literal Narrowing)
 */
const helloWorld = 'Hello World';
let hiWorld = 'Hi World';

/**
 * 문자열 리터럴 타입 (String Literal Types)
 */
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
      // ...
    } else if (easing === 'ease-in-out') {
      // ...
    }
  }
}
let button = new UIElement();
button.animate(0, 0, 'ease-in');
// button.animate(0, 0, 'uneasy'); '"uneasy"' 형식의 인수는 'Easing' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

/**
 * 숫자형 리터럴 타입 (Numeric Literal Types)
 */
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();
console.log(result);

declare function setupMap(config: MapConfig): void;
interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
