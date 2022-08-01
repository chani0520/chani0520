/**
 * 클래스 (Classes)
 */
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting; // this.를 앞에 분인 것 : 이것은 멤버에 접근하는 것을 의미
  }
}
let gretter = new Greeter('world');

/**
 * 상속 (Inheritance)
 */
class Animal {
  #name: string;
  public constructor(theName: string) {
    this.#name = theName;
  }
  public move(distanceInMeters: number = 0) {
    console.log(`${this.#name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}
let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);

/**
 * TypeScript의 private 이해하기 (Understanding TypeScript’s private)
 */

/**
 * 접근자 (Accessors)
 */
const fullNameMaxLength = 10;
class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('fullName has a max length of ' + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
  console.log(employee.fullName);
}

/**
 * 전역 프로퍼티 (Static Properties)
 */
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/**
 * 추상 클래스 (Abstract Classes)
 */
abstract class Abstract_Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earth...');
  }
}

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현되어야 합니다.
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 파생된 클래스의 생성자는 반드시 super()를 호출해야 합니다.
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}
let department: Department; // 추상 타입의 레퍼런스를 생성합니다
department = new Department(); // 오류: 추상 클래스는 인스턴스화 할 수 없습니다 추상 클래스의 인스턴스를 만들 수 없습니다.ts(2511)
department = new AccountingDepartment(); // 추상이 아닌 하위 클래스를 생성하고 할당합니다
department.printName();
department.printMeeting();
department.generateReports(); // 오류: 선언된 추상 타입에 메서드가 존재하지 않습니다 'Department' 형식에 'generateReports' 속성이 없습니다.ts(2339)

/**
 * 고급 기법 (Advanced Techniques)
 */
/**
 * 생성자 함수 (Constructor functions)
 */
class Greeter2 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
let greeter2: Greeter2;
greeter2 = new Greeter2('world');
console.log(greeter2.greet()); // "Hello, world""
