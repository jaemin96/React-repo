import React, { useState } from 'react';
import './App.css';
import { Counter } from 'components/Counter/counter';

type Count = {
    count: any;
};

interface State {
    total: any;
}

function App() {
    const [total, setTotal] = useState(0);

    // const handleCount = (count: any) => {
    //     console.log({ count });
    //     setTotal((prev) => prev + count);
    //     return count;
    // };

    const handleCount = () => {
        setTotal((prev) => prev + 1);
    };

    React.useEffect(() => {
        console.log({ total });
    }, [total]);

    return (
        <>
            <Counter handleCount={handleCount} />
            <Counter handleCount={handleCount} />
        </>
    );
}

export default App;
