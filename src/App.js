import React from 'react'
import styled from 'styled-components'
import './style.scss'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Main from './container/Main'
import Intro from './container/Intro'
import Notice from './component/Notice'

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Intro} />
            <Route path="/notice" component={Notice} />
        </Router>
    )
}

export default App
