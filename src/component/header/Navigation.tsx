import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Gnb: React.FC = () => {
    const clickEvent = (event: React.MouseEvent) => {
        console.log(event.target)
    }

    let location = useLocation()
    let pathname = location.pathname

    return (
        <NavigatorList className="leftBorder">
            <StyledLink className="noticeLink" to="/notice" onClick={clickEvent} pathname={pathname}>
                <span className="categoryNumber notice">notice</span>
            </StyledLink>
            <StyledLink className="boardLink" to="/board" onClick={clickEvent} pathname={pathname}>
                <span className="categoryNumber board">board</span>
            </StyledLink>
            <StyledLink className="ctfLink" to="/ctf" onClick={clickEvent} pathname={pathname}>
                <span className="categoryNumber ctf">CTF</span>
            </StyledLink>
        </NavigatorList>
    )
}

const NavigatorList = styled.ul`
    position: relative;

    display: inline-block;
    line-height: 1.815rem;
    padding-left: 1rem;
    margin-top: 1.125rem;
    margin-left: 1px;

    align-self: flex-start;

    a {
        text-align: left;
    }
`

interface LinkProps {
    readonly pathname: string
}

const StyledLink = styled(Link)<LinkProps>`
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

    .ctf {
        color: lime;
    }

    span {
        font-size: 1.3125rem;
    }
`

export default Gnb
