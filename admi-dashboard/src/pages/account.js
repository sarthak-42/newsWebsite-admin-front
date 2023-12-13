// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {useLocation} from 'react-use';
// import {useNavigate} from "react-router-dom";

// // import Header from "../components/shared/header";
// import SEO from "../components/shared/seo";
// import OTP from "../components/account/otp";
// import Register from "../components/account/register";
// import Login from "../components/account/login";

// const Account = () => {
//     const navigate = useNavigate();
//     const pathname = useLocation().search;

//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [error, setError] = useState("");
//     const [otp, setOtp] = useState("");
//     const [pan, setPan] = useState("");
//     const [referredBy, setReferredBy] = useState("");
//     const [aadharNo, setAadharNo] = useState("");
//     // eslint-disable-next-line
//     const [fullName, setFullName] = useState("");
//     const [showOtp, setShowOtp] = useState(false);
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [inputValidated, setInputValidated] = useState({
//         email: false,
//         phone: false,
//         pan: false,
//         aadhar: false,
//         pass: false,
//         confirmPass: false
//     })

//     const params = new URLSearchParams(pathname);
//     const loginStatus = params.get('login');
//     const ref = params.get('ref') || "";
//     console.log(loginStatus);

//     useEffect(() => {
//         setReferredBy(ref);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])

//     useEffect(() => {
//         if (pan.length < 10) {
//             setInputValidated(prevState => ({ ...prevState, pan: false }));
//         }else{
//             axios.post("http://localhost:1111/api/users/panVerification",{
//                 pan: pan,
//             }).then(response => {
//                 setFullName(response.data?.userData.full_name || "");
//                 setInputValidated(prevState => ({ ...prevState, pan: true }));
//             }).catch(err => {
//                 setError(err.response?.data || 'Unable to verify PAN number');
//             })
//         }
//     },[pan])

//     useEffect(() => {
//         if (aadharNo.length === 12) {
//             setInputValidated(prevState => ({ ...prevState, aadhar: true }));
//         }else{
//             setInputValidated(prevState => ({ ...prevState, aadhar: false }));
//         }
//     },[aadharNo])

//     useEffect(() => {
//         if (phone.length === 10) {
//             setInputValidated(prevState => ({ ...prevState, phone: true }));
//         }else{
//             setInputValidated(prevState => ({ ...prevState, phone: false }));
//         }
//     },[phone])

//     useEffect(() => {
//         if (password.length>=6 && confirmPassword === password){
//             setInputValidated(prevState => ({ ...prevState, pass: true, confirmPass: true }));
//         }else{
//             setInputValidated(prevState => ({ ...prevState, pass: true, confirmPass: false }));
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[confirmPassword])

//     function emailValidation(input) {
//         setError(null);
//         setEmail(input);
//         const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//         if (email.length > 5){
//             if (email.match(validRegex)) {
//                 setInputValidated(prevState => ({ ...prevState, email: true }));
//             } else {
//                 setInputValidated(prevState => ({ ...prevState, email: false }));
//             }
//         }
//     }

//     function registerationHandler(){
//         setError("");
//         if (inputValidated.email && inputValidated.phone && inputValidated.pan && inputValidated.aadhar && inputValidated.pass  && inputValidated.confirmPass){
//             axios.post("http://localhost:1111/api/users/userValidation",{
//                 referredBy: referredBy,
//                 email: email,
//                 phone: phone,
//                 aadharNo: aadharNo,
//                 pan: pan,
//                 password: password,
//                 confirmPassword: confirmPassword,
//                 fullName: fullName
//             }).then(response => {
//                 if (response.data.validationPassed){
//                     // axios.post("http://localhost:1111/api/users/sendOtp",{
//                     //     otp: "12345", email: email
//                     // }).then(resp => {
//                     //     console.log("otp resp >", resp);
//                     // }).catch(err => {
//                     //     console.log("err >>>", err);
//                     // })
//                     setShowOtp(true);
//                 }else{
//                     setError(response.data.error);
//                 }
//             }).catch(err => {
//                 setError(err.response?.data.error || "Something went wrong. Try again later!");
//                 // const panInput = panRef.current;
//                 // panInput.style.borderColor = '#FF0000';
//                 // panInput.style.borderWidth = '2px';
//                 // panInput.focus();
//             })
//         }else{
//             setError('All inputs must be checked!')
//         }
//     }

//     function otpVerification(){
//         setError("");
//         if (otp === "12345"){
//             axios.post("http://localhost:1111/api/users/userRegisteration",{
//                 email: email,
//                 phone: phone,
//                 aadharNo: aadharNo,
//                 pan: pan,
//                 password: password,
//                 fullName: fullName,
//                 referredBy: referredBy
//             }).then(response => {
//                 navigate("/dashboard");
//             }).catch(err => {
//                 setError('Something went wrong. Try again later!');
//             })
//         }else{
//             setError('Wrong OTP!');
//         }
//     }

//     return(
//         <>
//         <SEO title="Abacus Clouds" description=""/>
//         {/* <Header/> */}
//         {loginStatus === "true" ? (
//             <Login />
//         ):(
//             <div className="register_form">
//                 {showOtp ? (
//                     <OTP
//                         otp={otp}
//                         error={error}
//                         setError={setError}
//                         setOtp={setOtp}
//                         otpVerification={otpVerification}
//                     />
//                 ):(
//                     <Register
//                         error={error}
//                         email={email}
//                         phone={phone}
//                         referredBy={referredBy}
//                         setError={setError}
//                         inputValidated={inputValidated}
//                         emailValidation={emailValidation}
//                         setReferredBy={setReferredBy}
//                         registerationHandler={registerationHandler}
//                         confirmPassword={confirmPassword}
//                         aadharNo={aadharNo}
//                         setAadharNo={setAadharNo}
//                         setConfirmPassword={setConfirmPassword}
//                         password={password}
//                         setPassword={setPassword}
//                         pan={pan}
//                         setPan={setPan}
//                         setPhone={setPhone}
//                     />
//                 )}
//             </div>
//         )}
//         </>
//     )
// }

// export default Account;