import React, { useState } from 'react';
import style from './Mouse.module.scss';

interface Props {
    text: string;
}

export const MousePointer = (props: Props) => {
    const { text } = props;
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const [styles, setStyles] = useState({});

    const handlePosition = (e: any) => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
    };

    React.useEffect(() => {
        setStyles({
            transform: `translate(${position.x}px, ${position.y}px)`,
        });
    }, [position]);

    return (
        <div className={style.pointer_Wrapper} onPointerMove={handlePosition}>
            <span style={styles}>{text}</span>
        </div>
    );
};
