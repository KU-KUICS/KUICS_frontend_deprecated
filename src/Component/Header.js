import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Gnb from './Gnb'
import SearchBar from './SearchBar'

const Header = () => {
    let location = useLocation()
    let pathname = location.pathname

    return pathname === '/' ? (
        ''
    ) : (
        <Shadow className="Header">
            <RowBox>
                <SHeader>
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
                            <Logout>logout</Logout>
                        </ColumnBox>
                    </RowBox>
                </ColumnBox>
            </RowBox>
        </Shadow>
    )
}

const Profile = styled.div`
    align-self: flex-start;
    font-size: 1.4rem;
    font-weight: 600;
`

const Logout = styled(Profile)`
    color: red;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const ColumnBox = styled(RowBox)`
    flex-direction: column;
    align-self: flex-start;
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;

    div {
        align-self: flex-end;
    }
`

//background-color: #262c34;
//
const Shadow = styled.div`
    display: block;
    border-radius: 50px;
    padding: 2rem;
    margin-top: 2rem;
    width: -webkit-fill-available;
`

const SHeader = styled.header`
    display: block;
    h1 {
        font-size: 2rem;
    }

    text-align: center;
    align-self: flex-start;
`

export default Header
