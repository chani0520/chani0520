import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('🚨 선택한 날짜 :', date);
  }, [date]);

  return (
    <div className='pt-5 w-fit h-fit'>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarComponent;
