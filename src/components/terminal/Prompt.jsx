import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Redirect, Switch, Route,
} from 'react-router-dom';

import InputHandler from '../../functions/inputHandler';

import Help from '../../pages/help/Help';
import Login from '../../pages/login/Login';
import Intro from '../../pages/intro/Intro';
import BoardList from '../../pages/boardList/BoardList';

import Credit from '../../pages/credit/Credit';
import NotFound from '../../pages/notFound/NotFound';

const StyledPrompt = styled.div`
    color: lime;
    font-size: 2rem;
`;

const Prompt = () => {
  const [input, setInput] = useState('intro');
  const [count, setCount] = useState(0);
  return (
    <>
      <StyledPrompt>
        <Router>
          <div style={{ paddingTop: '1rem' }} />
          {'>'}
          <InputHandler setInput={setInput} setCount={setCount} count={count} />
          <Redirect to={input} />

          <Switch style={{ color: 'lime', fontSize: '2rem' }}>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/ls board">
              <BoardList count={count} />
            </Route>
            <Route path="/ls notice" />
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/credit">
              <Credit />
            </Route>
            <Route path="/intro">
              <Intro />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </StyledPrompt>
    </>
  );
};

export default Prompt;
