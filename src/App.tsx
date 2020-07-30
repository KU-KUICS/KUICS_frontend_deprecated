import React from 'react'
import './style.scss'
import './theme.scss'
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import DarkModeToggle from './component/darkMode/DarkModeToggle'
import IntroForm from './component/page/introPage/IntroForm'
import Header from './component/header/Header'
import ContextListView from './component/context/ContextListView'
import NotFound from './NotFound'
import ContextView from './component/context/ContextView'
import WritePageView from './component/page/writePage/WritePageView'

const PageRouter = ({ match }) => {
    const { category, id } = match.params
    return <ContextView category={category} id={id} />
}

const App = () => {
    return (
        <>
            <Router>
                <div style={{ display: 'none' }}>
                    <DarkModeToggle />
                </div>
                <div>
                    <Layout className="Layout">
                        <Header />
                        <Switch>
                            <Route path="/write" component={WritePageView} />
                            <Route path="/:category/:id" component={PageRouter} />
                            <Route path="/notice" component={ContextListView} />
                            <Route path="/board" component={ContextListView} />
                            <Route exact path="/" component={IntroForm} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Layout>
                </div>
            </Router>
        </>
    )
}

const Layout = styled.div`
    left: 50%;
    transform: translate(-50%, 0%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-x: visible;
    max-width: 1000px;
`

export default App
