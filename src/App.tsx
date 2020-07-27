import React from 'react'
import './style.scss'
import './theme.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'

import DarkModeToggle from './component2/darkMode/DarkModeToggle'
import IntroForm from './component2/introComponent/IntroForm'
import Header from './component2/Header'
import ViewList from './component2/ViewList'
import NotFound from './NotFound'

const App = () => {
    return (
        <>
            <Router>
                <div style={{ display: 'none' }}>
                    <DarkModeToggle />
                </div>
                <Layout className="Layout">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={IntroForm} />
                        <Route path="/notice" component={ViewList} />
                        <Route path="/board" component={ViewList} />
                        <Route path="*" component={NotFound} />
                    </Switch>
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
    max-width: 1000px;
`

export default App
