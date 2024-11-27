import React, {useState} from "react";

const Counter= () => {
    const [count, setCount] = useState(-1);
    const [text, setText] = useState("Even");
    function handleIncrement() {
        handleEvenOdd();
        setCount(count + 1);
        
    }
    const handleDecrement = () => {
        handleEvenOdd();
        setCount(count - 1);
    }
    const handleEvenOdd = () => {
        if((count+1) % 2 === 0) {
            setText("Even");
        } else {
            setText("Odd");
        }
    }
   
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Text: {text}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>This is a simple counter app.</p>
        </div>
    )
}

export default Counter;