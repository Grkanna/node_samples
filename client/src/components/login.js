// import { render } from "@testing-library/react";

import React, {useState, useEffect, useRef} from 'react';
import JSONdetails from './sampleJSON' ;
import axios from 'axios'
import { createBrowserHistory } from 'history'

function Login() {
    const history = createBrowserHistory();

    const [number, setNumber] = useState(0);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [welcomeText, setWelcomeText] = useState('');
    const [loginSuccess, setloginSuccess] = useState(false);

    const inputUserName = useRef();
    const inputPassword = useRef();

    useEffect(() => {
        inputUserName.current.focus()
        // inputPassword.current.focus()

        return () => console.log("I am destroyed")
    }, [])

    const incrementer = () => setNumber(number + 1)
    const reset = () => {
        setNumber(0);
        setloginSuccess(false);
        setUsername("");
        setPassword("");
        setWelcomeText("");
    }
    const loginCheck = () => {
        axios.post('http://localhost:5000/testAPI', {Username, Password})
        .then((json) =>{
            console.log('json', json)
            if (json.data.success === 1) {
                setWelcomeText(JSONdetails.welcomeText);
                setloginSuccess(true);
                history.push('/home')
            }
            else {
                setWelcomeText("Incorrect Password or User Name.");
            }
        })
    }

    const onChangeHandlerName = (event) => setUsername(event.target.value)
    const onChangeHandlerPassword = (event) => setPassword(event.target.value)

    return ( 
        <div className="loginPage d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center row">
                <h1>Login Test Page</h1>
                <div className="form-content">
                    <div className="input-group mb-3">
                        <span className="input-group-text">User Name</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandlerName} value={Username} ref={inputUserName}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={onChangeHandlerPassword} value={Password} ref={inputPassword}/>
                    </div>
                    <button type="button" className="btn btn-outline-primary px-5" onClick={() => {loginCheck(); incrementer()}}>Primary</button>
                    <button type="button" className="btn btn-outline-primary px-5 mx-5" onClick={reset}>reset</button>
                    {loginSuccess ?
                        <div>
                            <p className="mt-5">{`Hi, ${welcomeText}`}</p>
                        </div> 
                        : <div>
                            <p className="mt-5">{`${welcomeText}`}</p>
                        </div>
                    }
                    <p className="mt-5">{`How may times you login here ${number}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Login;