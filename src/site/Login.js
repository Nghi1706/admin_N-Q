import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { infoState$, scheduleState$ } from '../redux/selectors';
import * as actions from '../redux/actions';
const Login = () => {
    const [user, username] = useState("");
    const [pass, password] = useState("");
    const [otp, otplog] = useState("");
    let history = useHistory();
    const getnotp = () => {
        a = (Math.random() * (999999 - 100000 + 1)).toFixed(0)
        return a;
    }
    const log = () => {

        if (user === "adminNQ1804" && pass === "123" && otp === sessionStorage.getItem("otp")) {
            localStorage.setItem("accessToken", true)
            history.replace('/')
        }
        else {
            alert("You're not my admin website!")
        }



    }
    const newotp = async () => {
        sessionStorage.setItem("otp", (Math.random() * (999999 - 100000 + 1)).toFixed(0));
        let mail = {
            mail: 'Nghi176000@gmail.com',
            otp: sessionStorage.getItem("otp"),
        }
        await fetch("https://nqguimail.herokuapp.com/otp", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mail }),
        })
        alert("otp sent to Nghi176000@gmail.com !")
        console.log(mail.otp)
    }
    const dispatch = useDispatch();
    const info = useSelector(infoState$);
    React.useEffect(() => {
        dispatch(actions.fetchInfo.fetchInfoRequest());
    }, [dispatch]);
    const a = info.map((val, key) => {
        return (
            val.otp
        )
    })

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
                        <div className="mb-3">
                            <label for="otp" className="form-label">OTP</label>
                            <input type="text" className='form-control' id="otp" onChange={(event) => otplog(event.target.value)} />
                        </div>

                        <button className="btn btn-success" onClick={newotp}>Get OTP</button> <button className="btn btn-primary" onClick={log}>Submit</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xl-4"></div>
                </div>
            </div>
        </>
    )
}

export default Login
