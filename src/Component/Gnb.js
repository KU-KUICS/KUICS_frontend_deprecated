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
                <Navigator className="categoryNumber">0x00 /notice</Navigator>
            </StyledLink>
            <StyledLink to="/board" onClick={clickEvent}>
                <Navigator className="categoryNumber">0x01 /board</Navigator>
            </StyledLink>
        </NavigatorList>
    )
}

const Navigator = styled.span`
    font-weight: 600;
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
    transition: all 0.2s ease;

    &:hover,
    &:active,
    &:focus {
        font-size: 1.5rem;
        color: lime;
    }

    span:hover,
    span:active,
    span:focus {
        font-size: 1.5rem;
        color: lime;
    }
`

export default Gnb
