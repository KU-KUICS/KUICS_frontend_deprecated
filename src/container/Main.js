import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import styled from 'styled-components'

const Main = () => {
    return (
        <Layout>
            <Header />
            <Footer />
        </Layout>
    )
}

const Layout = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 30px;
    padding-top: 40px;
`

export default Main
