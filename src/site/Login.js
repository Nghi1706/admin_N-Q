import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [user, username] = useState("");

    const [pass, password] = useState("");
    let history = useHistory();
    const log = () => {
        if (user == "adminNQ1804" && pass == "123") {
            localStorage.setItem("accessToken", true)
            history.replace('/')
        }
        else {
            alert("You're not my admin website!")
        }

    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className="col-lg-4 col-md-4 col-xl-4"></div>
                    <div className="col-lg-4 col-md-4 col-xl-4">
                        <center><h2>Login</h2></center>
                        <div className="mb-3">
                            <label for="username" className="form-label">User name :</label>
                            <input type="text" className='form-control' id="username" onChange={(event) => username(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className='form-control' id="password" onChange={(event) => password(event.target.value)} />
                        </div>
                        <button className="btn btn-primary" onClick={log}>Submit</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xl-4"></div>
                </div>
            </div>
        </>
    )
}

export default Login
