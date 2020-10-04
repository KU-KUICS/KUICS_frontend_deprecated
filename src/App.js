import React from 'react';
import './App.scss';
import Appbar from './Components/Appbar';
import IntroPage from './Pages/IntroPage';
import BoardPage from './Pages/BoardPage';
import WritePage from './Pages/WritePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <Appbar />
                <Route exact path="/board" component={BoardPage}></Route>
                <Route exact path="/" component={IntroPage}></Route>
                <Route exact path="/board/write" component={WritePage} />
            </Router>
        </>
    );
};

export default App;
