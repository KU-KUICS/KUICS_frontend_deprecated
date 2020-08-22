const getIntro = async () => {
  const data = await fetch('http://localhost:4000/api/intro');
  const response = await data.json();
  return response;
};

export default getIntro;
