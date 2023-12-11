// import React from "react";
// import { toast } from "react-toastify";
// import { useRef } from "react";
// import copy from "copy-to-clipboard";
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import PortalHeader from "../components/shared/portalHeader";

// const Referral = () => {
//     const textRef = useRef();

//     const copyToClipboard = () => {
//         let copyText = textRef.current.value;
//         let isCopy = copy(copyText);

//         if (isCopy) {
//             toast.success("Copied to Clipboard");
//         }
//     };

//     return (
//         <PortalHeader>
//             <div>
//                 <Grid container spacing={2} className="copyLink">
//                     <Grid item sm={5} xs={12}>
//                         <input className="form-input" value="http://localhost:3000/register?1283743" disabled type="text" ref={textRef} />
//                     </Grid>
//                     <Grid item sm={4} xs={12}>
//                         <Button variant="contained" size="medium" onClick={copyToClipboard}>
//                             Text Copy
//                         </Button>   
//                     </Grid>
//                 </Grid>
//             </div>
//         </PortalHeader>
//     )
// }

// export default Referral;