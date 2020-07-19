import React from 'react'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false)

    return (
        <ToggleButton onClick={darkMode.value ? darkMode.disable : darkMode.enable}>
            <div id="dmtoggle">
                <div class="arc"></div>
                <div class="darc"></div>
                <div class="ray one"></div>
                <div class="ray two"></div>
                <div class="ray three"></div>
                <div class="ray four"></div>
                <div class="ray five"></div>
                <div class="ray six"></div>
                <div class="ray seven"></div>
                <div class="ray eight"></div>
            </div>
        </ToggleButton>
    )
}

export default DarkModeToggle

const ToggleButton = styled.div`
    position: relative;
`

const ButtonDesign = styled.button`
    border: 0;
    outline: 0;

    background-color: ${props => props.color};

    width: 2rem;
    height: 2rem;
`
