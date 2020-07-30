import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Gnb from './Navigation'
import DarkModeToggle from '../darkMode/DarkModeToggle'

const Header: React.FC = () => {
    let location = useLocation()
    let pathname = location.pathname

    console.log(pathname)

    return pathname === '/' ? (
        <></>
    ) : (
        <Shadow className="Header">
            <RowBox>
                <SHeader>
                    <img
                        className="logo"
                        alt="KUICS logo"
                        style={{ width: '4rem', paddingTop: '1rem' }}
                        src="./static/kuics-logo.svg"
                    />
                    <Link to="/">
                        <h1>KUICS</h1>
                    </Link>
                </SHeader>
                <ColumnBox>
                    <RowBox>
                        <Gnb />
                        <ColumnBox style={{ marginTop: '1rem' }}>
                            <Profile>hyp3rflow</Profile>
                            <Link to="/">
                                <Logout className="Logout">logout</Logout>
                            </Link>
                            <DarkModeToggle />
                        </ColumnBox>
                    </RowBox>
                </ColumnBox>
            </RowBox>
        </Shadow>
    )
}

export default Header

const Profile = styled.div`
    font-size: 1.3125rem;
    font-weight: 600;
`

const Logout = styled(Profile)`
    font-size: 1.3125rem;
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

const Shadow = styled.div`
    display: block;
    border-radius: 0 0 50px 50px;
    padding: 1rem 1rem 1.5rem 1rem;
    width: -webkit-fill-available;
    width: 90%;
`

const SHeader = styled.header`
    display: block;
    h1 {
        font-size: 2rem;
    }

    text-align: center;
    align-self: flex-start;

    padding: 0.5rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    border-radius: 2rem;
`
