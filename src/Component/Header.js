import React, { useMemo } from 'react'
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
        <>
            <Shadow>
                <SHeader>
                    <img alt="KUICS logo" style={{ width: '6rem' }} src="./static/kuics-logo.svg" />
                    <Link to="/">
                        <h1>KUICS</h1>
                    </Link>
                </SHeader>
                <Gnb />
                <RowBox>
                    <Title>
                        <span style={{ color: 'lime' }}></span>
                        {pathname}
                    </Title>
                    <Search>
                        <SearchBar />
                    </Search>
                </RowBox>
            </Shadow>
        </>
    )
}

const RowBox = styled.div`
    display: flex;
    align-items: center;
`

const Search = styled.h2`
    flex-grow: 1;

    text-align: right;
    font-size: 1.5rem;
    padding: 0 2rem 20px 2rem;
    font-family: Monaco;
`

const Title = styled.h2`
    font-family: Monaco;
    padding: 0 0 20px 2rem;
    font-size: 1.5rem;
    color: lime;
`

const Shadow = styled.div`
    background-color: #262c34;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 15px 15px;
`

const SHeader = styled.header`
    display: inline-block;
    padding: 2rem 0 2rem 2rem;
    h1 {
        font-size: 2rem;
    }
`

export default Header
