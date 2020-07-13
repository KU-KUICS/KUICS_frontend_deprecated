import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Gnb from './Gnb'

const Header = () => {
    return (
        <>
            <SHeader>
                <img alt="KUICS logo" style={{ width: '6rem' }} src="./static/kuics-logo.svg" />
                <Link to="/">
                    <h1>KUICS</h1>
                </Link>
            </SHeader>
            <Gnb />
        </>
    )
}

const SHeader = styled.header`
    display: inline-block;
    padding: 1rem 0 2rem 1rem;
    h1 {
        font-size: 2rem;
    }
`

export default Header
