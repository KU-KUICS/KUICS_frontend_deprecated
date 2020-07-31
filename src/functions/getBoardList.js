const getBoardList = (count) => {
  const request = new XMLHttpRequest();
  request.open('GET', `http://test.kuics.kro.kr:4000/api/board?count=${count}`, false);
  request.send(null);

  return request.responseText;
};

export default getBoardList;
