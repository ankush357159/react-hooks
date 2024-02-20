import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Initial state is 0

    const handleClick = () => {
        setCount(count + 1); // Update state using setCount
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Counter;
