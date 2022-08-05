import Document, {
  Html,
  Head,
  Main,
  DocumentContext,
  NextScript,
} from 'next/document';

/**
 * 🔸 _document.tsx : _app.tsx 다음으로 실행되며, 공통적으로 사용할 <head> (ex. meta tag...)나 <body>태그 안에 들어갈 내용들을 custom할때 사용
 *
 * - _document를 작성할때는 항상 Document class를 상속받는 클래스로 작성해야하고, 렌더함수에는 꼭 <Html>, <Head>, <Main>, <NextScript>를 리턴해야한다.
 */
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id='portal' />
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
