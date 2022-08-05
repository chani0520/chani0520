import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from '../pdf-worker';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const data = (
  <div>
    <div>Test</div>
    <h1>H1</h1>

    <hr />

    <table>
      <th>Table Head</th>
      <td>Test1</td>
      <td>Test2</td>
    </table>
  </div>
);

export default function PDFViewerComponent() {
  const [file, setFile] = useState('../testPDF.pdf');
  const [numPages, setNumPages] = useState(0);

  function onFileChange(event: any) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    // 참고 : https://codesandbox.io/s/react-pdf-next-js-y4ev2?file=/next.config.js
    <div className='container mx-auto w-2/3 text-center'>
      <div className=''>
        <label htmlFor='file'>불러올 파일 :</label>{' '}
        <input onChange={onFileChange} type='file' />
        <p>
          <b>총 페이지 수</b> : {numPages}장
        </p>
        <p>
          <b>현재 페이지 </b> : 1장
        </p>
      </div>
      <hr className='border-2 border-red-300 my-2' />
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page>{file}</Page>
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              scale={1.5}
              pageIndex={index}
              pageNumber={index + 1}
              // renderAnnotationLayer={false}
              // renderTextLayer={false}
            ></Page>
          ))}
      </Document>
    </div>
  );
}
