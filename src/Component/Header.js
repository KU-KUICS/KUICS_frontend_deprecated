import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Gnb from './Gnb'
import SearchBar from './SearchBar'
import DarkModeToggle from '../DarkModeToggle'

const Header = () => {
    let location = useLocation()
    let pathname = location.pathname

    return pathname === '/' ? (
        ''
    ) : (
        <Shadow className="Header">
            <RowBox>
                <SHeader className>
                    <img className="logo" alt="KUICS logo" style={{ width: '4rem' }} src="./static/kuics-logo.svg" />
                    <Link to="/">
                        <h1>KUICS</h1>
                    </Link>
                </SHeader>
                <ColumnBox>
                    <RowBox>
                        <Gnb />

                        <ColumnBox>
                            <Profile>hyp3rflow</Profile>
                            <Logout className="Logout">logout</Logout>
                            <DarkModeToggle />
                        </ColumnBox>
                    </RowBox>
                </ColumnBox>
            </RowBox>
        </Shadow>
    )
}

const Profile = styled.div`
    font-size: 1.725rem;
    font-weight: 600;
`

const Logout = styled(Profile)`
    font-size: 1.4rem;
    color: red;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const ColumnBox = styled(RowBox)`
    flex-direction: column;
    display: inline-block;
    align-self: flex-start;
    text-align: right;

    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
`

//background-color: #262c34;
//
const Shadow = styled.div`
    display: block;
    border-radius: 0 0 50px 50px;
    padding: 2.25rem;
    width: -webkit-fill-available;
`

const SHeader = styled.header`
    display: block;
    h1 {
        font-size: 2rem;
    }

    text-align: center;
    align-self: flex-start;

    padding: 1rem;
    padding-top: 0;
    border-radius: 2rem;
`

export default Header
