import React from 'react';
import style from './App.module.scss';
// import { MousePointer } from 'components/Mouse';
import { NestObject } from 'components/StateManager';
import EsPage from './container/ES/EsPage';
import ReactPage from 'container/React/ReactPage';

/* <MousePointer text="hello world" /> */

function App() {
    return (
        <>
            <NestObject />
            <hr />
            <EsPage />
            <hr />
            <ReactPage />
        </>
    );
}

export default App;
