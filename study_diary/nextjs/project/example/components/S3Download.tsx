import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const S3Download = () => {
  const router = useRouter();

  const getS3Url = async () => {
    await axios
      .get('http://localhost:4000/v0/files/117/download', {
        withCredentials: true,
      })
      .then((res) => {
        console.log('✅ res =>', res);
      });
  };

  return (
    <div className='pt-5 w-fit h-fit'>
      <button
        className='border-2 border-blue-500 p-10 rounded-xl'
        onClick={() => getS3Url()}
      >
        Download
      </button>
    </div>
  );
};

export default S3Download;
