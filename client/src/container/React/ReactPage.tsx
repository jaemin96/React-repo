import React from 'react';
import { MemoComponent } from './components';

const ReactPage = () => {
    return (
        <>
            <MemoComponent>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
            </MemoComponent>

            <MemoComponent>
                <h1>hello</h1>
                <h2>hi!!!</h2>
            </MemoComponent>

            <MemoComponent>
                <span>hello</span>
                <article>hello punch</article>
            </MemoComponent>
        </>
    );
};

export default ReactPage;
