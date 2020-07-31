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

const InputHandler = (props) => {
  const getKeyCode = useCallback((event) => {
    if (event.keyCode === 13) {
      const prompt = document.getElementsByClassName('prompt')[0];
      const { count } = props;
      props.setCount(count + 1);
      console.log(prompt.value);
      if (prompt.value === '') {
        props.setInput('intro');
      } else {
        props.setInput(prompt.value);
      }
      prompt.value = '';
    } else if (event.keyCode === 81) {
      props.setCount(0);
    }
  }, [props]);

  useEffect(() => {
    document.addEventListener('keydown', getKeyCode, false);

    return () => {
      document.removeEventListener('keydown', getKeyCode, false);
    };
  }, [getKeyCode]);

  return (
    <StyledInput className="prompt" autoFocus />
  );
};

export default InputHandler;
