import React from 'react';

const EsPage = () => {
    let list: any;
    (list = []).length = 7;
    list.fill(0);

    return list.map((item: any, index: any) => (
        <p key={index + 1}>{`${index} = ${index + 1}`}</p>
    ));
};

export default EsPage;
