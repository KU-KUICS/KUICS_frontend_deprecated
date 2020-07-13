import React from 'react'

import './style.scss'
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './container/Main'
import Viewer from './container/Routing'

const App = () => {
    return (
        <Router>
            <Main />
        </Router>
    )
}

export default App
