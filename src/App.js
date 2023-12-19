import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
// import Referral from './pages/referral';
// import Products from './pages/products';
// import Settings from './pages/settings';
// import Account from './pages/account';
import View from './components/dashboard/View';
import Login from './components/account/login';
import NotFound from './pages/NotFound';
import NewsList from './components/dashboard/newsList';
import AccountContext from './utils/AccountContext';
import Category from './components/dashboard/category';
// import NewsAdded from './components/dashboard/newsAdded';


function App() {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const data = {
    login,
    setLogin,
    userData,
    setUserData,
  };
  const sessionData = sessionStorage.getItem("userInfo");
  useEffect(() => {
    if (sessionData) {
      setLogin(true);
      setUserData(JSON.parse(sessionData));
    } else {
      setLogin(false);
      setUserData(null);
    }
  }, [setLogin, setUserData]);

  return (
    <AccountContext.Provider value={data}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/account" element={<Account />}/> */}
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/featured" element={<View/>}/>
        <Route path="/categories" element={<NotFound/>}/>
        <Route path="/newsList" element={<NewsList/>}/>
        <Route path="/category" element={<Category/>}/>
        {/* <Route path="/settings" element={<Settings />}/> */}
      </Routes>
    </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;