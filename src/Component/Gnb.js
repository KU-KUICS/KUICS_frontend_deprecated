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
    &:hover,
    &:focus,
    &:active {
        color: lime;
    }
`

const NavigatorList = styled.ul`
    position: relative;

    display: inline-block;
    line-height: 2rem;
    padding-left: 1rem;
    margin-left: 1px;
    border-left: black 1px solid;

    align-self: flex-start;

    a {
        text-align: left;
    }
`

const StyledLink = styled(Link)`
    position: relative;
    display: block;

    .board {
        transition: color 0.6s cubic-bezier(0, 0.51, 0.42, 0.84);
        color: ${props => (props.pathname.includes('/board') ? '#3b1efe' : 'inherit')};
    }

    .notice {
        transition: color 0.6s cubic-bezier(0, 0.51, 0.42, 0.84);
        color: ${props => (props.pathname.includes('/notice') ? '#3b1efe' : 'inherit')};
    }
`

export default Gnb
