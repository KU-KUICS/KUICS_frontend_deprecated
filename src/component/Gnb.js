import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Viewer from '../container/Routing'

const Gnb = () => {
    return (
        <NavigatorList>
            <Link to="/about">
                <List>소개</List>
            </Link>

            <Link to="/announcement">
                <List>공지사항</List>
            </Link>

            <Link to="/board">
                <List>게시판</List>
            </Link>
        </NavigatorList>
    )
}

const NavigatorList = styled.ul`
    position: absolute;
    width: 100px;
    right: 30px;
    display: inline-block;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
`

const List = styled.li`
    position: relative;
    display: block;
    padding-left: 30px;
    transition: all 0.2s ease;

    &:hover {
        font-size: 1.725rem;
        color: red;
    }

    &::before {
        position: absolute;
        content: '';
        left: 27px;
        top: 5px;
        width: 20px;
        height: 10px;
        background-color: #790030;
        z-index: -1;
        transform: skew(0, -40deg);
    }
`

export default Gnb
