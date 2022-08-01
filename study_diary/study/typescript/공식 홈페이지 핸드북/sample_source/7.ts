/**
 * 유니언 타입 (Union Types)
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }

  if (typeof padding === 'string') {
    return padding + value;
  }

  throw new Error(`Expected string or number, got '${padding}'.`);
}
// console.log(padLeft('Hello world', true)); 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
console.log(padLeft('Hello World', 4));

/**
 * 공통 필드를 갖는 유니언 (Unions with Common Fields)
 */
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// pet.swim(); 'Bird | Fish' 형식에 'swim' 속성이 없습니다. 'Bird' 형식에 'swim' 속성이 없습니다.ts(2339)

/**
 * 유니언 구별하기 (Discriminating Unions)
 */
type NetworkLoadingState = {
  state: 'loading';
};
type NetworkFailedState = {
  state: 'failed';
  code: number;
};
type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function networkStatus(state: NetworkState): string {
  // state.code; 'NetworkState' 형식에 'code' 속성이 없습니다. 'NetworkLoadingState' 형식에 'code' 속성이 없습니다.ts(2339)

  switch (state.state) {
    case 'loading':
      return 'Downloading...';

    case 'failed':
      return `Error ${state.code} downloading`;

    case 'success':
      return `Downloading ${state.response.title} - ${state.response.summary}`;
  }
}

/**
 * 교차 타입 (Intersection Types)
 */
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtworksData {
  artworks: { title: string }[];
}
interface ArtistsData {
  artists: { name: string };
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};

/**
 * 교차를 통한 믹스인 (Mixins via Intersections)
 */
class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(neae: string) {
    console.log(`Hello, I'm ${name}`);
  }
}

function extend<First extends {}, Second extends {}>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }

  return result as First & Second;
}
const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);
