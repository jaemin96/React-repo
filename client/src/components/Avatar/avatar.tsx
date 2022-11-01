import React from 'react';
import style from './avatar.module.css';

interface Props {
    name: string;
    url: string;
    new: boolean;
}

export const Avatar = (props: Props) => {
    console.log({ props });
    return (
        <div className={style.avatarWrapper}>
            {props && props.new && <h1>new</h1>}
            <img className={style.avatarImg} src={props.url} alt="avatar" />
            <span className={style.avatarName}>{props.name}</span>
        </div>
    );
};
