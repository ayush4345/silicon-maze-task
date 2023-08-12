import "./form.css";
import { useState } from "react";

export default function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // give "Invalid first name" error message if first name is not valid
    // give "Invalid " error message if first name is not valid
    // give "Invalid password" error message if password is not valid
    // give "Invalid email address" error message if email address is not valid



    // Password should contain atleast 1 Capital letter,1 Small letter, 1 Symbol, 1 Number.
    // First Name and Last Name should start with capital Letter
    // Validate input of email field for valid email Id.
    let Error = ' ';
    const validateForm = () => {
        if(FirstName[0]< 'A' || FirstName[0] > 'Z'){
            setErrorMessage("Invalid first name")

            // Error = Error + `Invalid first name  `;
        }
        
        if(LastName[0]< 'A'  || LastName[0] > 'Z' ){
            setErrorMessage("Invalid last name")
            // Error = Error + "Invalid last name  ";
            // console.warn("Invalid last name");
        }
        // if(!Password.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])")){
            //     console.warn("Invalid password");
            // }
        if((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])$/.test(Password))){
            setErrorMessage("Invalid password")
            // Error = Error + "Invalid password  ";
            // console.warn("Invalid password");
        }
        if(!EmailId.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
            setErrorMessage("Invalid email address")
            // Error = Error + "Invalid email address  ";
            // console.warn("Invalid email address");
        }
        // setErrorMessage(Error);

    };


    return (
        <main>
            <div className="form">
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="inputContainer">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="input"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="input"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="input"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <button className="button" onClick={validateForm}>
                    Submit
                </button>
            </div>
        </main>
    );
}
