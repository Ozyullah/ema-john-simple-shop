import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {

    const {createUser}=useContext(AuthContext)

    const [confirme, setConfirme]=useState({})
    const [error, setError]= useState(null)
    const handleSubmite=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email =form.email.value;
        const password =form.password.value;
        const confirm =form.confirm.value;
        if(password !== confirm){
            setError('Your password did not match')
            return;
          
        }
        else if(password.length<6){
            setError('Your password is not more than six charecter')
        }
        else{
            createUser(email,password)
            .then(result =>{
                const user =result.user;
                console.log(user)
                setConfirme(user);
                form.reset()
            })
            .catch(error=>{
                console.error(error, 'error')
                setError('This email alredy used')
            })
        }
        
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign up</h1>
            <form onSubmit={handleSubmite}>
                <div className="email-control">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" placeholder='please enter your email' id="" required/>
                </div>
                <div className='password-control'>
                    <label htmlFor="">Password: </label>
                    <input type="password" name="password" placeholder='please enter your password' id="" required/>
                </div>
                <div className='password-control'>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="password" name="confirm" placeholder='please enter your confirm password' id="" required/>
                </div>

                <p className='text-error'>{error}</p>
                <button className='btn-form'>Register</button>
            </form>
            <p className='para-form'>Alredy have an account <Link to={'/login'}>Login</Link></p>
            {/* {
                confirme?.email? to={'/login'}
                : <p>cote is error</p>
            } */}

        </div>
    );
};

export default SignUp;