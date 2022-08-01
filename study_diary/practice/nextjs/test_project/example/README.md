This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## history

### 2022-03-23

#### 1. AOS library 추가 ( typescript사용시 @types/aos도 설치해야 오류 메세지 출력 안됨 )

```bash
npm install --save @types/aos aos
```

#### 2. `_app.tsx`에 import

```typescript
import type { AppProps } from 'next/app';
import AOS from 'aos'; // added

import '../styles/globals.css';
import 'aos/dist/aos.css'; // added
import { useEffect } from 'react'; // added

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

#### 3. index.tsx에서 테스트 해보기

- AOS 공식 홈페이지 : [AOS](https://michalsnik.github.io/aos/)

- 참고 github : [BrunoS3D / nextjs-with-aos-example](https://github.com/BrunoS3D/nextjs-with-aos-example)
- 참고 github : [cruip / tailwind-landing-page-template](https://github.com/cruip/tailwind-landing-page-template/blob/main/src/partials/Footer.jsx)

```typescript
// data-aos & data-aos-delay 속성을 줌으로서 각각의 요소가 어떻게 나올지를 설정할수 있고, delay로는 시간차도 줄수 있다.
<h1 className={styles.title} data-aos='fade-up' data-aos-delay='700'>
  Welcome to <a href='https://nextjs.org'>Next.js!</a>
</h1>
```

### 2022-03-24

#### 1. API TEST 중...

- Nest.js를 4000port에서 실행시킨 뒤, 클라이언트(3000port)에서 request를 제대로 보내고, response를 제대로 받는지 테스트 중

- `http://localhost:3000/apitest` => `http://localhost:4000/`

1. pre-render시, getStaticProps() 함수 테스트

2. 특정 버튼 클릭시, axios로 요청 보낸 뒤 정상적으로 데이터 받아오는지 테스트

- 버튼 클릭시 axios호출까지는 잘 됬지만, Nest.js에서 CORS 설정이 안되있어 오류가 발생했다.

- `nest.js /src/main.ts`에서 `app.enableCors()`로 수정한 뒤 요청을 다시 보내니까 해결
