// import React from "react";

// const OTP = ({ fullName, otp, error, setOtp = () => { }, setError = () => { }, otpVerification = () => { } }) => {
//     return (
//         <>
//             <div className="register_form">
//                 <div className="form_design relative z-9 bg-white mx-auto w-full grid rounded-[10px]">
//                     <h1 className="text-center Welcome_heading">Welcome {fullName}!</h1>
//                     <p className="w-full text-center mb-[10px]">Do not refresh the page!</p>
//                     <p className={`text-[16px] text-left text-[#FF0000] font-semibold mb-[10px] ${error ? 'block' : 'hidden'}`}>Error: {error}</p>
//                     <label htmlFor="otp" className="form-label">Enter OTP</label>
//                     <input
//                         className="inpit_row form-input"
//                         name="otp"
//                         type="text"
//                         value={otp}
//                         maxLength={6}
//                         onChange={(e) => {
//                             setOtp(e.target.value);
//                             setError(null);
//                         }}
//                     />
//                     <button className="form-action" onClick={otpVerification}>
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default OTP;