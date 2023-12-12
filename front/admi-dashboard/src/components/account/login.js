import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import axios from "axios";
// import useNavigate from 'react-router-dom'



const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {isLoggedIn, setIsLoggedIn} = useAuth()
    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     try {
    //         await axios.post('localhost:5000/users/signin')
    //         alert('Registered Successfully')
    //     } catch (error) {
    //         console.error('Error:' , error)
    //         alert('Registration Failed')
            
    //     }
    // }
    // useEffect(() => {
    //     if (isLoggedIn){
    //         navigate("/account/dashboard");
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[isLoggedIn]);

    const validateForm = () => {
        if (email.trim() === '') {
            alert('Please enter an email address');
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Invalid email format');
            return false;
        } else if (password === '') {
            alert('Please enter a password');
            return false;
        }
    
        return true; // Form is valid
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
               const response = await axios.post('http://localhost:5000/api/users/signin', { email, password });
                // alert('Login successful');
            
                sessionStorage.setItem("xios", JSON.stringify(response.data));

                navigate('/dashboard')
            } catch (err) {
                console.error('Error:', err);
                alert('Login failed');
            }
        } else {
            // Handle invalid form case if needed
            alert('Please enter valid input')
        }
    };
       
    
    return(
        <div className="register_form" >
            
            <div className="form_design relative z-9 bg-white mx-auto w-full grid rounded-[10px]">
            <h1 className="text-center uppercase">Login</h1>
            <p className={`text-[16px] text-left text-[#FF0000] font-semibold mb-[10px] ${error ? 'block' : 'hidden'}`}>Error: {error}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                className="inpit_row form-input"
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                }}
            />
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                className="inpit_row form-input"
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                }}
            />
            <button className="form-action" type="Submit" onClick={handleSubmit}>
                Login
            </button>
            {/* <p className="text-[16px] text-center mt-[15px]">Don't have an account? <Link to="/account?login=false" className="font-medium text_link">Register</Link></p> */}
        </div>
            
        </div>
    )
}

export default Login;



