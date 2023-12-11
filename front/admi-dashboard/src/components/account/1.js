// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SEO from "../../components/shared/seo";
// import { PostRequest } from "../../utils/requests";
// import { AccountContext } from "../../App";

// const Login = () => {
//     const navigate = useNavigate();
//     const [loginInput, setLoginInput] = useState({
//         email: '',
//         password: ""
//     });
//     const [error, setError] = useState('');
//     const [disabled, setDisabled] = useState(false);
//     const { login, setLogin } = useContext(AccountContext);

//     useEffect(() => {
//         if (login){
//             navigate("/account/dashboard");
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[login]);

//     function loginHandler() {
//         setDisabled(true);
//         setError('');
//         PostRequest(process.env.REACT_APP_API_URL + 'user/login', {
//             email: loginInput.email,
//             password: loginInput.password
//         })
//         .then(response => {
//             console.log(">>>", response)
//             setLogin(true);
//             sessionStorage.setItem("xios", JSON.stringify(response.data?.data));
//             navigate("/account/dashboard");
//         })
//         .catch(error => {
//             console.log('Error during login:', error);
//             setDisabled(false);
//             setError(error.data.error);
//         });
//     }
//     return(
//         <>
//         <SEO title="Login" desciption=""/>
//         <div className="register_form">
//             <div className="form_design relative z-9 bg-white mx-auto w-full grid rounded-[10px]">
//             <h1 className="text-center uppercase">Login</h1>
//             <p className={`text-[16px] text-left text-[#FF0000] font-semibold mb-[10px] ${error ? 'block' : 'hidden'}`}>Error: {error}</p>
//             <label htmlFor="email" className="form-label">Email</label>
//             <input 
//                 className="inpit_row form-input"
//                 name="email"
//                 type="email"
//                 disabled={disabled}
//                 value={loginInput.email}
//                 onChange={(e) => {
//                     setLoginInput((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value}));
//                     setError(null);
//                 }}
//             />
//             <label htmlFor="password" className="form-label">Password</label>
//             <input 
//                 disabled={disabled}
//                 className="inpit_row form-input"
//                 name="password"
//                 type="password"
//                 value={loginInput.password}
//                 onChange={(e) => {
//                     setLoginInput((prevInput) => ({ ...prevInput, [e.target.name] : e.target.value,}));
//                     setError(null);
//                 }}
                
//             />
//             <button disabled={disabled} className={`text-white mt-[10px] h-[50px] text-[18px] ${disabled ? "bg-[#008000]" : "bg-[#0d3b89]"}`} onClick={loginHandler}>
//                 {disabled ? "Logging in..." : "Login"}
//             </button>
//             <p className="text-[16px] text-center mt-[15px]">Don't have an account? <Link to="/account/register" className="font-medium text_link">Register</Link></p>
//         </div>
//         </div>
//         </>
//     )
// }

// export default Login;
