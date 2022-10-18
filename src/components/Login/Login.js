import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Log in</h1>
            <form>
                <div className="email-control">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" placeholder='please enter your email' id="" />
                </div>
                <div className='password-control'>
                    <label htmlFor="">Password: </label>
                    <input type="password" name="password" placeholder='please enter your password' id="" />
                </div>

                <button className='btn-form'>Login</button>
            </form>
        </div>
    );
};

export default Login;