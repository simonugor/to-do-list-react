import React, { useState } from 'react';
import './App.css';
//import componets
import Form from "./components/Form"
import Header from "./components/Header"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [values, setValues] = useState({user: "", pass: ""})
  const [display, setDisplay] = useState({display1: "block", display2: "none"})

  function usernameHandleChange(value) {
    setUsername(currentUsername => value)
  }

  function passwordHandleChange(value) {
    setPassword(currentPassword => value)
  }

  function logIn(event) {
    event.preventDefault()
    setValues(() => ({
      user: username,
      pass: password
    }))
    //do i want to do this?
    setUsername(currentUsername => "")
    setPassword(currentPassword => "")
    setDisplay(() => ({
      display1: "none",
      display2: "block"
    }))
  }

  function register(event) {
    event.preventDefault()
    console.log("register")
  }

  return(
    <div>
      <div style={{display: display.display1}}>
        <Header />
        <Form 
          username={username} 
          password={password} 
          usernameHandleChange={usernameHandleChange}
          passwordHandleChange ={passwordHandleChange}
          logIn={logIn}
          register={register}
        />
      </div>
      <div style={{display: display.display2}}>
        <h1 style={{textAlign: "center"}}>Loading...</h1>
      </div>
    </div>
  )
}

export default App;
