import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Gnb = () => {
    return (
        <NavigatorList>
            <Link to="/about">
                <List>소개</List>
            </Link>

            <Link to="/notice">
                <List>공지사항</List>
            </Link>

            <Link to="/board">
                <List>게시판</List>
            </Link>
        </NavigatorList>
    )
}

const NavigatorList = styled.ul`
    text-align: right;
    position: absolute;
    width: 100px;
    right: 0;
    display: inline-block;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    padding-right: 1rem;
`

const List = styled.li`
    position: relative;
    display: block;
    transition: all 0.2s ease;

    &:hover {
        font-size: 1.5rem;
        color: red;
    }
`

export default Gnb
