import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: none;
  border: none;
  color: lime;
  font-size: 2rem;
  margin: 10px;
  vertical-align: baseline;

  width: 80%;
`;

const InputHandler = ({ func, states }) => {
  const { setCount, setLocation, setInput } = func;
  const { count, location } = states;

  const getKeyCode = useCallback(
    (event) => {
      if (event.keyCode === 13) {
        const prompt = document.getElementsByClassName('prompt')[0];
        setCount(count + 1);
        const { value } = prompt;

        if (value === '') {
          setInput('intro');
        } else if (value.startsWith('cd')) {
          const loc = value.split(' ')[1];
          if ((loc === '..' || loc === '../') && location.startsWith('~/')) {
            setLocation('~');
          } else if (loc === '~/') {
            setLocation('~');
          } else if (location === '~') {
            if (loc === 'board') {
              setLocation('~/board');
            } else if (loc === 'notice') {
              setLocation('~/notice');
            }
          }
          setInput('clear');
        } else if (value.startsWith('ls') || value.startsWith('ll')) {
          switch (location) {
            case '~/board':
              setInput('ls board');
              break;
            case '~/notice':
              setInput('ls notice');
              break;
            default:
              setInput('ls');
          }
        } else {
          setInput(value);
        }
        prompt.value = '';
      } else if (event.keyCode === 81) {
        setCount(0);
      }
    },
    [states]
  );

  useEffect(() => {
    document.addEventListener('keydown', getKeyCode, false);

    return () => {
      document.removeEventListener('keydown', getKeyCode, false);
    };
  }, [getKeyCode]);

  return <StyledInput className="prompt" autoFocus />;
};

export default InputHandler;
