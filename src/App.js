import React, { useState } from 'react';
import './App.css';
//import componets
import Form from "./components/Form"
import Header from "./components/Header"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [values, setValues] = useState({user: "", pass: ""})

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
  }

  function register(event) {
    event.preventDefault()
    console.log("register")
  }

  return(
    <div>
      <Header />
      <Form 
        username={username} 
        password={password} 
        usernameHandleChange={usernameHandleChange}
        passwordHandleChange ={passwordHandleChange}
        logIn={logIn}
        register={register}
      />
      <h1>{values.user}</h1>
      <h1>{values.pass}</h1>
    </div>
  )
}

export default App;
