import React from "react"

function Form(props) {

    function handleChangeUsername(event) {
        props.usernameHandleChange(event.target.value)
    }

    function handleChangePassword(event) {
        props.passwordHandleChange(event.target.value)
    }

    function callLogin(event) {
        props.logIn(event)
    }

    function callRegister(event) {
        props.register(event)
    }

    return(
        <div className="form_div">
            <form className="form">
                <input className="username_input" placeholder="username" type="text" value={props.username} onChange={handleChangeUsername}></input>
                <input className="password_input" placeholder="password" type="password" value={props.password} onChange={handleChangePassword}></input>
                <button className="form_button" onClick={callLogin}>Log In</button>
                <h3 className="form_or">or</h3>
                <button onClick={callRegister} className="form_button form_button-register">Create New Account</button>
            </form>
        </div>
    )
}

export default Form