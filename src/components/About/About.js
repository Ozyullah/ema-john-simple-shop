import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {

    const {auto}= useContext(AuthContext);
    return (
        <div>
            <h1>This is About Section</h1>
        </div>
    );
};

export default About;