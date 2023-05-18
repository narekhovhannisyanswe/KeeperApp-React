import Input from "./Input";
import React, { useState } from "react";

class FormHelper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    render() {
        return <h1>Hello from class component</h1>
    }
}

export default function Login({ isRegistered }) {
    console.log("isLoggedIn", isRegistered);

    const [isMouseOver, setMouseOver] = useState(false)

    return (
        <form className="form">
            <FormHelper />
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!isRegistered && <Input type="password" placeholder="confirm" />}
            <button
                style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                type="submit"
                onMouseOver={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
            >
                {isRegistered ? "Login" : "Register"}
            </button>
        </form>
    )
}