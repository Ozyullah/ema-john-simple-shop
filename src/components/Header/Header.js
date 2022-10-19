import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

        const {user,logOut}=useContext(AuthContext);
        const handleSignout=()=>{
            logOut()
            .then(()=>{})
            .catch((error=>{
                console.error(error,'error')
            }))
        }
       

    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <p className='header-email'>{user?.email}</p>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                
                <Link to='/signup'>Sign up</Link>

                {
                    user?.email ? <Link id='logout-btn' onClick={handleSignout} to='/signup'>Log out</Link>
                    :
                    <Link id='login-btn' to='/login'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;