const getIntro = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://test.kuics.kro.kr:4000/api/intro', false);
    request.send(null);

    return request.responseText;
}

export default getIntro;