import React, { useEffect, useState } from 'react';
import style from './counter.module.css';

export const Counter = (props: any) => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className={style.counterWrapper}>
            <span className={style.count}>{count}</span>
            <button
                className={style.addBtn}
                onClick={() => {
                    addCount();
                    props.handleCount();
                }}
            >
                +
            </button>
        </div>
    );
};
