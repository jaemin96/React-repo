import React, { useState } from 'react';
import style from './Mouse.module.scss';

interface Props {
    text: string;
}

export const MousePointer = (props: Props) => {
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [styles, setStyles] = useState({});

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        setPositionX(clientX);
        setPositionY(clientY);
    });

    React.useEffect(() => {
        console.log({ positionX }, { positionY });
        setStyles({
            top: positionY,
            left: positionX,
        });
    }, [positionX, positionY]);

    return (
        <div className={style.pointer} style={styles}>
            {props.text}
        </div>
    );
};
