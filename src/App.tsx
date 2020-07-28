import React from 'react'
import './style.scss'
import './theme.scss'
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import DarkModeToggle from './component/darkMode/DarkModeToggle'
import IntroForm from './component/introComponent/IntroForm'
import Header from './component/Header'
import ViewList from './component/ViewList'
import NotFound from './NotFound'
import TmpPage from './component/ContextView'

const PageRouter = ({ match }) => {
    const { category, id } = match.params
    return <TmpPage category={category} id={id} />
}

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
                        <Route path="/:category/:id" component={PageRouter} />
                        <Route path="/notice" component={ViewList} />
                        <Route path="/board" component={ViewList} />
                        <Route path="/ctf" component={ViewList} />
                        <Route exact path="/" component={IntroForm} />
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
