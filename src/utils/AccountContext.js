const {createContext} = require('react')
const AccountContext = createContext({
    login: false,
    setLogin:()=>{},
    userData: null,
    setUserData: ()=>{},
    // logout: ()=>{
    //     sessionStorage.removeItem('userInfo');

    //     // Update login state and user data
     
    // }
    
}

)

export default AccountContext