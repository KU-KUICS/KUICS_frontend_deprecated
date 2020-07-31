const getBoardList = async () => {
    const response = await fetch('http://test.kuics.kro.kr:4000/api/boards');
    return response.json();
};

export default getBoardList;