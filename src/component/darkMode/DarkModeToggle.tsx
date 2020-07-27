import React from 'react'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false)

    return (
        <ToggleButton onClick={darkMode.value ? darkMode.disable : darkMode.enable}>
            <div id="dmtoggle">
                <div className="arc"></div>
                <div className="darc"></div>
                <div className="ray one"></div>
                <div className="ray two"></div>
                <div className="ray three"></div>
                <div className="ray four"></div>
                <div className="ray five"></div>
                <div className="ray six"></div>
                <div className="ray seven"></div>
                <div className="ray eight"></div>
            </div>
        </ToggleButton>
    )
}

export default DarkModeToggle

const ToggleButton = styled.div`
    position: relative;

    &,
    &:focus,
    &:active,
    &:hover,
    &:visited,
    &:active:focus {
        background: none;
        outline: none;
        box-shadow: none;
        padding: 0;
    }
`
