import React from 'react';
// import Card from '../components/dashboard/card';
// import Grid from '@mui/material/Grid';
import PortalHeader from '../components/shared/portalHeader';
import Categories from '../components/dashboard/categories';
// import View from '../components/dashboard/View';

const Dashboard = () => {
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