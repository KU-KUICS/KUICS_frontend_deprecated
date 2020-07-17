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
        <Shadow>
            <RowBox>
                <SHeader>
                    <img alt="KUICS logo" style={{ width: '6rem' }} src="./static/kuics-logo.svg" />
                    <Link to="/">
                        <h1>KUICS</h1>
                    </Link>
                </SHeader>
                <Gnb />
                <Search>
                    <SearchBar />
                </Search>
            </RowBox>
        </Shadow>
    )
}

const Title = styled.h3`
    font-size: 1.5rem;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
`

const Search = styled.div`
    flex-grow: 1;

    text-align: right;
    font-size: 1.5rem;

    align-self: flex-end;
`

const Shadow = styled.div`
    background-color: #262c34;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 15px 15px;
    margin-bottom: 15px;
    padding: 2rem;
`

const SHeader = styled.header`
    display: inline-block;
    h1 {
        font-size: 2rem;
    }
`

export default Header
