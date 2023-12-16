import React from 'react';
import { useEffect, useContext } from 'react';
// import Card from '../components/dashboard/card';
// import Grid from '@mui/material/Grid';
import PortalHeader from '../components/shared/portalHeader';
import Categories from '../components/dashboard/categories';
import { useNavigate } from 'react-router-dom';
// import View from '../components/dashboard/View';
import AccountContext from "../utils/AccountContext";
const Dashboard = () => {
    const navigate = useNavigate();

    const { login } = useContext(AccountContext);
    useEffect(() => {
      if (!login) {
        navigate("/login");
      }
    }, [login, navigate]);
  
    return (
        <PortalHeader>
            <div>
               
                 <Categories/>  
                 {/* <View/>  */}
           
            </div>
         </PortalHeader>
    )
}

export default Dashboard;