import { useRef, useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(0);
    const step = useRef(1);

    const setStep = (value: number) => {
        step.current = value;
    }

    const decrement = () => {
        setCount(count - step.current);
    }

    const increment = () => {
        setCount(count + step.current);
    }
    
    const reset = () => {
        setCount(0);
    }
    return(
        <section>
        <h2>{count}</h2>
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        <label htmlFor="step"> Increment/Decrement by:</label>
            <input id="step" 
                type="number"
                defaultValue={step.current}
                min="1"
                max="10"
                onChange={(e) => setStep((e.target as HTMLInputElement).valueAsNumber)}
                />
        <button onClick={reset}>Reset</button>
        </section>
    );
}