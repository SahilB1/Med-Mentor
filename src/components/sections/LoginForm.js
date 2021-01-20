import React, { useState } from 'react'
import './Login.css';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault()

        Login(details)
    }
    return (
        <div className="center">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                <div className="form-group">
                    <input type="text" placeholder="MSU Email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;