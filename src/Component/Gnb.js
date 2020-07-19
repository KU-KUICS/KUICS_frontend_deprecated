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
        <NavigatorList className="leftBorder">
            <StyledLink className="noticeLink" to="/notice" onClick={clickEvent} pathname={pathname}>
                <Navigator className="categoryNumber notice">notice</Navigator>
            </StyledLink>
            <StyledLink className="boardLink" to="/board" onClick={clickEvent} pathname={pathname}>
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
        color: ${props => (props.pathname.includes('/board') ? 'coral' : 'inherit')};
    }

    .notice {
        transition: color 0.6s cubic-bezier(0, 0.51, 0.42, 0.84);
        color: ${props => (props.pathname.includes('/notice') ? 'coral' : 'inherit')};
    }
`

export default Gnb
