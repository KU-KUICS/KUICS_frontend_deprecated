import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Gnb = () => {
    const clickEvent = event => {
        console.log(event.target)
    }

    let location = useLocation()
    let pathname = location.pathname
    console.log(pathname)

    return (
        <NavigatorList>
            <StyledLink to="/notice" onClick={clickEvent} pathname={pathname}>
                <Navigator className="categoryNumber notice">notice</Navigator>
            </StyledLink>
            <StyledLink to="/board" onClick={clickEvent} pathname={pathname}>
                <Navigator className="categoryNumber board">board</Navigator>
            </StyledLink>
        </NavigatorList>
    )
}

const Navigator = styled.span`
    font-weight: 600;
    &:hover,
    &:focus,
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

    align-self: flex-start;
`

const StyledLink = styled(Link)`
    position: relative;
    display: block;
    transition: all 0.4s ease;

    .board {
        color: ${props => (props.pathname === '/board' ? 'lime' : 'inherit')};
    }

    .notice {
        color: ${props => (props.pathname === '/notice' ? 'lime' : 'inherit')};
    }
`

export default Gnb
