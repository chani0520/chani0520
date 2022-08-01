import React from 'react';
import PDFButton from './PDFButton';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const html = (
  <div className='border border-emerald-300 text-center'>
    <ul>
      <li>TEST1</li>
      <li>TEST2</li>
      <li>TEST3</li>
      <li>TEST4</li>
    </ul>
  </div>
);

const SampleForPDF = () => {
  return (
    <div className='container mx-auto text-center'>
      <hr className='my-5' />
      <Document>
        <Page size='A4' style={styles.page}>
          <View>{html}</View>
        </Page>
      </Document>
      <PDFButton html={html} />
    </div>
  );
};

export default SampleForPDF;
