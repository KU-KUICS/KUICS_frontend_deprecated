import React from 'react';

const BoardList = () => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const today = new Date();
  const date = today.getDate();
  const mon = month[today.getMonth()];
  const hour = today.getHours();
  const min = today.getMinutes();
  const minProc = min < 10 ? `0${min}` : min;
  const time = `${hour}:${minProc}`;

  const todayString = `${date} ${mon} ${time}`;

  return (
    <>
      <div>
        drwxrwx--- - kuics kuics 4096
        {' '}
        {todayString}
        {' '}
        notice
      </div>
      <div>
        drwxrwx--- - kuics kuics 4096
        {' '}
        {todayString}
        {' '}
        board
      </div>
    </>
  );
};

export default BoardList;
