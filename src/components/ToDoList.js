import {useState} from "react";

export default function ToDoList({props}) {
    let [listThingTodo, setList] = useState([])
    let [thingToDo, setThingToDo] = useState("");
    const handleChange = (e) => {
        setThingToDo(e.target.value)
    }
    const handleClick=()=>{
        setList([...listThingTodo,thingToDo]);
        setThingToDo("");
    }

    return (
        <>
            <h1> {props} </h1>
            <div style={{textAlign: "center", padding: "30px"}}>
                <h2>To Do List</h2>
                <input type="text" name="input" onChange={(e)=>handleChange(e)}/>
                <br/>
                <button onClick={handleClick}>Add</button>
                <h2>To Do List</h2>
                <br/>
                <div style={{textAlign: "center", padding: "30px"}}>
                    <ul>
                        {listThingTodo.map(val => (
                            <li>{val}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}