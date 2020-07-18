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
                    <img alt="KUICS logo" style={{ width: '6rem' }} src="./static/kuics-logo.svg" />
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
    font-size: 1.725rem;
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

//
const Shadow = styled.div`
    display: block;
    background-color: #262c34;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 15px 15px;
    padding: 2rem;
    width: -webkit-fill-available;
`

const SHeader = styled.header`
    display: block;
    h1 {
        font-size: 2rem;
    }

    align-self: flex-start;
`

export default Header
