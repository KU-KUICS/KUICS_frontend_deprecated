import React from 'react'
import './style.scss'
import './theme.scss'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import DarkModeToggle from './component/darkMode/DarkModeToggle'
import IntroForm from './component/introComponent/IntroForm'
import Header from './component/Header'
import ViewList from './component/ViewList'

const App = () => {
    return (
        <>
            <Router>
                <div style={{ display: 'none' }}>
                    <DarkModeToggle />
                </div>
                <Layout className="Layout">
                    <Header />
                    <Route exact path="/" component={IntroForm} />
                    <Route path="/notice" component={ViewList} />
                    <Route path="/board" component={ViewList} />
                </Layout>
            </Router>
        </>
    )
}

const Layout = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-x: visible;
    max-width: 800px;
`

export default App
