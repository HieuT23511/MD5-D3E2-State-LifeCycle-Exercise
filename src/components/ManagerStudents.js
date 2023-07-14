import {Button} from "@mui/material";
import StudentTable from "./TableStudent";
import {useState} from "react";

export default function ManagerStudents({props}) {
    let [listStudent, setListStudents] = useState([]);
    let [formStudent, setFormStudent] = useState({
        name: "",
        phone: "",
        email: "",
    });
    let [isValid, setIsValid] = useState(false);
    let [indexSelected, setIndexSelected] = useState(-1);
    let [checkMessage, setCheckMessage] = useState({
        nameCheck: "",
        phoneCheck: "",
        emailCheck: "",
        studentCheck: "",
    });

    const handleCheck = (e) => {
        let input = {
            ...formStudent,
            [e.target.name]: e.target.value,
        };
        let {name, email, phone} = input;
        let patternName = /[a-zA-Z]$/;
        let patternPhone = /^(0)\d{9}$/;
        let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (e.target.name === "name") {
            let nameCheckMsg = patternName.test(name)
                ? ""
                : "Name must be fullfill or invalid!";
            setCheckMessage({
                ...checkMessage,
                nameCheck: nameCheckMsg,
            });
        }
        if (e.target.name === "phone") {
            let phoneCheckMsg = patternPhone.test(phone)
                ? ""
                : "Phone must be fullfill or invalid!";
            setCheckMessage({
                ...checkMessage,
                phoneCheck: phoneCheckMsg,
            });
        }
        if (e.target.name === "email") {
            let emailCheckMsg = patternEmail.test(email)
                ? ""
                : "Email must be fullfill or invalid!";
            setCheckMessage({
                ...checkMessage,
                emailCheck: emailCheckMsg,
            });
        }
        if (
            name &&
            phone &&
            email &&
            patternPhone.test(phone) &&
            patternEmail.test(email)
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleChange = (e) => {
        console.log(checkMessage.studentCheck);
        setCheckMessage({
            ...checkMessage,
            studentCheck: "",
        });
        setFormStudent({
            ...formStudent,
            [e.target.name]: e.target.value,
        });
        handleCheck(e);
    };

    const handleClick = () => {
        if (isValid) {
            if (indexSelected === -1) {
                let index = listStudent.findIndex(
                    (item) => item.email === formStudent.email
                );
                if (index === -1) {
                    setListStudents([...listStudent, formStudent]);
                } else {
                    setCheckMessage({
                        ...checkMessage,
                        studentCheck: "Student was existed!",
                    });
                }
            } else {
                let studentEditted = {
                    ...formStudent,
                };
                listStudent.splice(indexSelected, 1, studentEditted);
                setListStudents([...listStudent]);
                setIndexSelected(-1);
            }
            setFormStudent({
                name: "",
                phone: "",
                email: "",
            });
        }
    };
    const handleEdit = (index) => {
        setIndexSelected(index);
        setFormStudent({
            ...listStudent[index],
        });
    };
    const handleDelete = (index) => {
        if (window.confirm("Are you sure to delete this one?")) {
            listStudent.splice(index, 1);
            setListStudents([...listStudent]);
        }
    };

    return (
        <>
            <h1> {props} </h1>{" "}
            <div
                style={{
                    textAlign: "left",
                }}
            >
                <div
                    style={{
                        margin: "20px",
                    }}
                >
                    <h3> Student List </h3>{" "}
                    <table>
                        <tr>
                            <td> Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name={"name"}
                                    value={formStudent.name}
                                    onChange={handleChange}
                                />
                                {checkMessage.nameCheck}{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> Phone:</td>
                            <td>
                                <input
                                    type="text"
                                    name={"phone"}
                                    value={formStudent.phone}
                                    onChange={handleChange}
                                />
                                {checkMessage.phoneCheck}{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> Email:</td>
                            <td>
                                <input
                                    type="text"
                                    name={"email"}
                                    value={formStudent.email}
                                    onChange={handleChange}
                                />
                                {checkMessage.emailCheck}{" "}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button variant="contained" onClick={handleClick}>
                                    Add / Edit
                                </Button>
                            </td>
                            <td> {checkMessage.studentCheck} </td>
                        </tr>
                    </table>
                </div>
                <div
                    style={{
                        margin: 20,
                    }}
                >
                    <StudentTable
                        list={listStudent}
                        deleteClick={handleDelete}
                        editClick={handleEdit}
                    />
                </div>
            </div>
        </>
    );
}
