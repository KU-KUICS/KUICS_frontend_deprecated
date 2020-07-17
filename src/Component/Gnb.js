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
                <span className="categoryNumber">0x00</span>
                &nbsp;공지사항
            </StyledLink>
            <StyledLink to="/board" onClick={clickEvent}>
                <span className="categoryNumber">0x01</span>&nbsp;게시판
            </StyledLink>
        </NavigatorList>
    )
}

const NavigatorList = styled.ul`
    text-align: left;
    position: absolute;
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
