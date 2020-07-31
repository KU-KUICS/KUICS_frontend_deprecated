import React from 'react';

import getBoardList from '../../functions/getBoardList';

const BoardList = (props) => {
  const { count } = props;
  const boardList = getBoardList(count);
  return (
    <div>{boardList}</div>
  );
};

export default BoardList;
