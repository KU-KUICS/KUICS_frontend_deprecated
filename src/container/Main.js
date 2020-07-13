import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import styled from 'styled-components'
import Routing from './Routing'

const Main = () => {
    return (
        <Layout>
            <Header />
            <Routing />
            <Footer />
        </Layout>
    )
}

const Layout = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 30px;
`

export default Main
