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

    const [familyCount, setFamilyCount] = useState(0);

    const [visible, setVisible] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        console.log({ family });

        if (family && family.people) {
            setFamilyCount(family.people.length);
        }
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
        });

        name.value = '';
        age.value = '';
        position.value = '';
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
            <div className={style.info_container}>
                <h1>[SUWON FAMILY]</h1>
                <h2>{`Number Of Family : ${familyCount}`}</h2>
                <h2>{`AREA : ${family.area}`}</h2>
                <h2>{`HEAD : ${family.head}`}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>position</th>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {family &&
                            family.people.map((info, index) => {
                                return (
                                    <tr key={`${info.position}__${index}`}>
                                        <td>{info.position}</td>
                                        <td>{info.name}</td>
                                        <td>{info.age}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                {/* {family.map((info) => {})}
                <div></div> */}
            </div>
        </div>
    );
};
