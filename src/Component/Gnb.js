import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Gnb = () => {
    return (
        <NavigatorList>
            <Link to="/notice">
                <List>
                    <span className="categoryNumber">0x00</span>&nbsp;공지사항
                </List>
            </Link>

            <Link to="/board">
                <List>
                    <span className="categoryNumber">0x01</span>&nbsp;게시판
                </List>
            </Link>
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

const List = styled.li`
    position: relative;
    display: block;
    transition: all 0.2s ease;

    &:hover {
        font-size: 1.5rem;
        color: red;
    }

    &:active,
    &:focus {
        font-size: 1.5rem;
        color: red;
    }
`

export default Gnb
