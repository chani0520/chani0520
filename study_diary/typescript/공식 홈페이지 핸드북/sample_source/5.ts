/**
 * 함수 (Function)
 */
// 기명 함수
/*
function add(x, y) {
  return x + y;
}
*/
// 익명 함수
/*
let myAdd = function (x, y) {
  return x + y;
};

let z = 100;
function addToZ(x, y) {
  return x + y + z;
}
*/

/**
 * 함수 타입 (Function Types)
 */
/**
 * 함수의 타이핑 (Typing the function)
 */
/*
function add(x: number, y: number): number {
  return x + y;
}
let myAdd = function (x: number, y: number): number {
  return x + y;
};
*/

/**
 * 함수 타입 작성하기 (Writing the function type)
 */
// let myAdd: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };

let myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

/**
 * 선택적 매개변수와 기본 매개변수 (Optional and Default Parameter)
 */
/*
function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}
// let result1 = buildName('Bob'); 2개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)
// let result2 = buildName('Chan', 'Kim', 'bori'); 2개의 인수가 필요한데 3개를 가져왔습니다.ts(2554)
let result3 = buildName('Chan', 'Kim');
*/
/*
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
}
let result1 = buildName('Chan');
// let result2 = buildName('Chan', 'Kim', 'Bori'); 1-2개의 인수가 필요한데 3개를 가져왔습니다.ts(2554)
let result3 = buildName('Chan', 'Kim');
*/
/*
function buildName(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName;
}
let result = buildName('Bob', undefined);
console.log(result);
*/
/*
function buildName(firstName = 'Will', lastName: string) {
  return firstName + ' ' + lastName;
}
let result = buildName(undefined, 'Adams');
console.log(result);
*/

/**
 * 나머지 매개변수 (Rest Parameters)
 */
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}
let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
console.log(employeeName);

let buildNameFun: (fName: string, ...rest: string[]) => string = buildName;

/**
 * this
 */
/**
 * this와 화살표 함수 (this and arrow functions)
 */
/*
let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
*/
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    // NOTE: 아랫줄은 화살표 함수로써, 'this'를 이곳에서 캡처할 수 있도록 합니다
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

/**
 * 콜백에서 this 매개변수 (this parameters in callbacks)
 */
// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }
// class Handler {
//   info: string;
//   onClickGood(this: void, e: Event) {
//     // void 타입이기 때문에 this는 이곳에서 쓸 수 없습니다!
//     console.log('clicked!');
//   }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);

/**
 * 오버로드 (Overloads)
 */
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x): any {
  // 인자가 배열 또는 객체인지 확인
  // 만약 그렇다면, deck이 주어지고 card를 선택합니다.
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // 그렇지 않다면 그냥 card를 선택합니다.
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log('cconsole.log' + pickedCard2.card + ' of ' + pickedCard2.suit);
