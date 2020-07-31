import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Result from './Result';

const StyledPrompt = styled.div`
    color: lime;
    font-size: 2rem;
`;

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
            props.setInput(prompt.value);
            prompt.value = '';
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", getKeyCode, false);

        return () => {
            document.removeEventListener("keydown", getKeyCode, false);
        }
    }, [getKeyCode]);

    return (
        <StyledInput className="prompt" autoFocus={true}/>
    )
}

const Prompt = () => {
    const [input, setInput] = useState('');
    return (
        <>
            <StyledPrompt>
                <div dangerouslySetInnerHTML={{__html: "<br>"}}/>
                {'>'}<InputHandler setInput={setInput}/>
            </StyledPrompt>
            <Result input={input}/>
        </>
    )
}

export default Prompt;