import React from 'react'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false)

    return (
        <ToggleButton>
            <ButtonDesign color="white" type="button" onClick={darkMode.disable}>
                해
            </ButtonDesign>
            <ButtonDesign color="black" style={{ color: 'white' }} type="button" onClick={darkMode.enable}>
                달
            </ButtonDesign>
        </ToggleButton>
    )
}

export default DarkModeToggle

const ToggleButton = styled.div`
    position: relative;
    padding-top: 1rem;
`

const ButtonDesign = styled.button`
    border: 0;
    outline: 0;

    background-color: ${props => props.color};

    width: 2rem;
    height: 2rem;
`
