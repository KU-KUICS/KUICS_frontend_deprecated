import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from '../component/About'
import MoreAbout from '../component/MoreAbout'

const Routing = () => {
    return (
        <>
            <Route exact path="/" component={About} />
            <Route path="/about" component={MoreAbout} />
        </>
    )
}

export default Routing
