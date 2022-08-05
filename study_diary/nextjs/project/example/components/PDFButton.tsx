import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

interface Props {
  html: any;
}

const pdfDoc = (html: any) => {
  <Document>
    <Page size='A4'>
      <View>
        <Text>Section1</Text>
      </View>
    </Page>
  </Document>;
};

const PDFButton = ({ html }: Props) => {
  console.log(html);

  const showpdf = () => {
    return (
      <PDFViewer>
        <Document>
          <Page size='A4'>
            <View>
              <Text>Section1</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  };

  return (
    <button
      className='rounded py-1 px-3 my-5 bg-blue-400 text-white'
      onClick={() => showpdf()}
    >
      PDF보기
    </button>
  );
};

export default PDFButton;
