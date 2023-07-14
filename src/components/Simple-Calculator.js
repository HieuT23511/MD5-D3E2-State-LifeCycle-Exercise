import {useState} from "react";

export default function SimpleCalculator({props}) {
    let [input1, setInput1] = useState("");
    let [input2, setInput2] = useState("");
    let [total, setTotal] = useState("");
    const handle = (operator) => {
        switch (operator) {
            case "+":
                total = Number(input1) + Number(input2)
                break;
            case "-":
                total = Number(input1) - Number(input2)
                break;
            case "*":
                total = Number(input1) * Number(input2)
                break;
            case "/":
                total = Number(input1) / Number(input2)
                break;
        }
        setTotal(total)
    }
    return (
        <>
            <h1>{props}</h1>
            <div style={{textAlign: "center", padding: "30px"}}>
                <input type="text" onChange={(event) => {
                    setInput1(event.target.value)
                }}/>
                <br/>
                <input type="text" onChange={(event) => {
                    setInput2(event.target.value)
                }}/>
                <p>The Result is: {total}</p>
                <button onClick={() => (handle("+"))}>+</button>
                <button onClick={() => (handle("-"))}>-</button>
                <button onClick={() => (handle("*"))}>x</button>
                <button onClick={() => (handle("/"))}>/</button>
            </div>
        </>
    )
}