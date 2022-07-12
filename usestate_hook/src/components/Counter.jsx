import { useState } from "react"

function Counter() {

    const [counterValue, setCounterValue] = useState(0)

    const incrementValue = () => setCounterValue(counterValue + 1)
    const decrementValue = () => setCounterValue(counterValue - 1)

    return (
        <div className="Counter">

            <h2>Counter</h2>

            <p>You clicked {counterValue} times</p>

            <button onClick={decrementValue}> - </button>
            <button onClick={incrementValue}> + </button>
        </div>
    )
}

export default Counter