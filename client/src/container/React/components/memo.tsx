import React from 'react';

export const MemoComponent = ({ children }: any) => {
    return (
        <div
            style={{
                width: '10rem',
                height: '10rem',
                border: '1px solid black',
                display: 'flex',
                overflow: 'scroll',
            }}
        >
            {children}
        </div>
    );
};
