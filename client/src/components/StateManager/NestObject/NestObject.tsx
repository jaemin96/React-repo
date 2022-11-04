import React, { useState, useEffect, useRef } from 'react';
import style from './NestObject.module.scss';

export const NestObject = () => {
    const [family, setFamily] = useState({
        area: 'suwon',
        head: 'mom',
        people: [],
    });

    const [visible, setVisible] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        console.log({ family });
    }, [family]);

    const activeInput = () => {
        setVisible(true);
    };

    const inActiveInput = () => {
        setVisible(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log({ e });

        console.log(formRef.current);
    };

    return (
        <div className={style.family_wrapper}>
            {/* family add btn */}
            <button onClick={activeInput}>ADD</button>
            {/* input section - name & age & position / submit, cancel btn */}
            {visible && (
                <form onSubmit={handleSubmit} ref={formRef}>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="age" />
                    <input type="text" placeholder="position" />
                    <button>submit</button>
                    <button onClick={inActiveInput}>CANCEL</button>
                </form>
            )}
            <div className={style.info_container}>nest object</div>
        </div>
    );
};
