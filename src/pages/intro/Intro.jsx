import React, { useState, useEffect } from 'react';

import getIntro from '../../functions/getIntro';

const Intro = () => {
  let intro = '';
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const data = await getIntro();
      setFetchedData(data);
    };

    fetching();
  }, []);

  if (fetchedData) {
    fetchedData.introList.forEach((item) => {
      intro += `<span style="font-size: 3rem; font-weight: 700;">${item.title}</span><br><br>`;
      item.content.forEach((content) => {
        intro += `${content}<br>`;
      });
    });
  }

  return <div dangerouslySetInnerHTML={{ __html: intro }} />;
};

export default Intro;
