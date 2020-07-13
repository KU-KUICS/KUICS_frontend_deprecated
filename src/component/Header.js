import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Gnb from './Gnb'

const Header = () => {
    return (
        <Relative>
            <SHeader>
                <img style={{ width: '6rem' }} src="./static/kuics-logo.svg" />
                <Link to="/">
                    <h1>KUICS</h1>
                </Link>
            </SHeader>
            <Gnb />
        </Relative>
    )
}

const SHeader = styled.header`
    display: inline-block;
    left: 30px;
    text-align: center;
    padding-bottom: 3rem;

    h1 {
        font-size: 2rem;
    }
`

const Relative = styled.div`
    position: relative;
`

export default Header
