import React from 'react'
import './style.scss'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import IntroForm from './IntroComponent/IntroForm'
import Notice from './Component/Notice'
import Board from './Component/Board'

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={IntroForm} />
            <Route path="/notice" component={Notice} />
            <Route path="/board" component={Board} />
        </Router>
    )
}

export default App
