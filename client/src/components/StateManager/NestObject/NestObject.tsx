import React, { useState, useEffect, useRef } from 'react';
import style from './NestObject.module.scss';

export const NestObject = () => {
    const [family, setFamily] = useState({
        area: 'suwon',
        head: 'mom',
        people: [
            {
                name: '홍길동',
                age: 15,
                position: '떠돌이',
            },
        ],
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
        const { name, age, position } = e.target;

        setFamily({
            ...family,
            people: [
                ...family.people,
                { name: name.value, age: age.value, position: position.value },
            ],

            // 현재 있는 녀석 + 새로 추가한 녀석 = [{prev}, {new}] === ...prev, {새로 추가할 거} 이거 맞자나
            // [
            //     { name: name.value, age: age.value, position: position.value },
            // ],
        });
    };

    return (
        <div className={style.family_wrapper}>
            {/* family add btn */}
            <button onClick={activeInput}>ADD</button>
            {/* input section - name & age & position / submit, cancel btn */}
            {visible && (
                <form onSubmit={handleSubmit} ref={formRef}>
                    <input name="name" type="text" placeholder="name" />
                    <input name="age" type="text" placeholder="age" />
                    <input name="position" type="text" placeholder="position" />
                    <button type="submit">submit</button>
                    <button onClick={inActiveInput}>CANCEL</button>
                </form>
            )}
            <div className={style.info_container}>nest object</div>
        </div>
    );
};
