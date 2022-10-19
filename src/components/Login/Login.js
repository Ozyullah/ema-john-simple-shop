import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const {signInUser}=useContext(AuthContext)

    const navigate =useNavigate()

    const location=useLocation();
    let from =location.state?.from?.pathname || '/';

    const handleSubmite=(event)=>{
        event.preventDefault()
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        signInUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.error(error,'error')
        })
    }
       
    return (
        <div className='form-container'>
            <h1 className='form-title'>Log in</h1>
            <form onSubmit={handleSubmite}>
                <div className="email-control">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" placeholder='please enter your email' id="" required/>
                </div>
                <div className='password-control'>
                    <label htmlFor="">Password: </label>
                    <input type="password" name="password" placeholder='please enter your password' id="" required/>
                </div>
                <button className='btn-form'>Login</button>
            </form>
            <p className='para-form'>new to Ema-jhon? <Link to={'/signup'}>Create New Account</Link></p>

            
        </div>
    );
};

export default Login;