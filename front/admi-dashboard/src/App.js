import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
// import Referral from './pages/referral';
// import Products from './pages/products';
// import Settings from './pages/settings';
// import Account from './pages/account';
import View from './components/dashboard/View';
import Login from './components/account/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/account" element={<Account />}/> */}
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/view" element={<View/>}/>
        {/* <Route path="/products" element={<Products />}/> */}
        {/* <Route path="/settings" element={<Settings />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;