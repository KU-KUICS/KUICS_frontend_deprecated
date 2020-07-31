import React from 'react';

import Terminal from '../../components/terminal/Terminal';
import Header from '../../components/common/Header';
import Prompt from '../../components/terminal/Prompt';

const Main = () => {
    return (
        <>
            <Terminal>
                <Header/>
                <Prompt/>
            </Terminal>
        </>
    )
}

export default Main;