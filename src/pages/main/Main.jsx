import React from 'react';

import Terminal from '../../components/terminal/Terminal';
import Header from '../../components/common/Header';
import Prompt from '../../components/terminal/Prompt';

const Main = () => (
  <>
    <Terminal className="terminal">
      <Header />
      <Prompt />
    </Terminal>
  </>
);

export default Main;
