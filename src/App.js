import logo from './logo.svg';
import './App.css';
import ExpandCollapseContent from "./components/Expand-Collapse-Content";
import {useState} from "react";
import SimpleCalculator from "./components/Simple-Calculator";
import FormLoginOut from "./components/Form-LoginOut";
import "bootstrap/dist/css/bootstrap.css"
import ToDoList from "./components/ToDoList";
import ManagerStudents from "./components/ManagerStudents";

function App() {
    let [isShow1, setIsShow1] = useState(true);
    let [isShow2, setIsShow2] = useState(true);
    let [isShow3, setIsShow3] = useState(true);
    let [isShow4, setIsShow4] = useState(true);
    let [isShow5, setIsShow5] = useState(true);
    return (
        <>
            {/*Exercise 1: */}
            <button onClick={()=>{
                setIsShow1(!isShow1)
            }}>Show Ex1</button>
            {isShow1 && <ExpandCollapseContent props={"Exercise 1"}/>}

            {/*Exercise 2: */}
            <button onClick={()=>{
                setIsShow2(!isShow2)
            }}>Show Ex2</button>
            {isShow2 && <SimpleCalculator props={"Exercise 2"}/>}

            {/*Exercise 3: */}
            <button onClick={()=>{
                setIsShow3(!isShow3)
            }}>Show Ex3</button>
            {isShow3 && <FormLoginOut props={"Exercise 3"}/>}

            {/*Exercise 4: */}
            <button onClick={()=>{
                setIsShow4(!isShow4)
            }}>Show Ex4</button>
            {isShow4 && <ToDoList props={"Exercise 4"}/>}

            {/*Exercise 5: */}
            <button onClick={()=>{
                setIsShow5(!isShow5)
            }}>Show Ex5</button>
            {isShow5 && <ManagerStudents props={"Exercise 5"}/>}
        </>
    );
}

export default App;
