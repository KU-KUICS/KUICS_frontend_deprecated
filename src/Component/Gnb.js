import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Gnb = () => {
    const clickEvent = event => {
        console.log(event.target)
    }

    return (
        <NavigatorList>
            <StyledLink to="/notice" onClick={clickEvent}>
                <Navigator className="categoryNumber">0x00_/notice</Navigator>
            </StyledLink>
            <StyledLink to="/board" onClick={clickEvent}>
                <Navigator className="categoryNumber">0x01_/board</Navigator>
            </StyledLink>
        </NavigatorList>
    )
}

const Navigator = styled.span`
    font-weight: 600;
    &:hover,
    &:focus {

        color: lime;
    }

    &:active {
        color: lime;
    }
`

const NavigatorList = styled.ul`
    position: relative;
    padding-left: 2rem;
    padding-right: 1rem;

    display: inline-block;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
`

const StyledLink = styled(Link)`
    position: relative;
    display: block;
    transition: all 0.4s ease;

    &:hover,
    &:focus,
    span:hover,
    span:focus {
        color: lime;
    }

    &:active,
    span:active {
        color: lime;
    }
`

export default Gnb
