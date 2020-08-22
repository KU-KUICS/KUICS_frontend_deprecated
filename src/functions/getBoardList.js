const getBoardList = async (count) => {
  const data = await fetch(`http://localhost:4000/api/board?count=${count}`);
  const response = await data.json();
  console.log(response);
  return response;
};

export default getBoardList;
