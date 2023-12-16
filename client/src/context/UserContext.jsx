import { createContext, useState, children, useEffect } from 'react';

export const UserContext = createContext();

const userLocal = JSON.parse(localStorage.getItem('account')) || null;

export const UserProvider = ({ children }) =>{
    const [user, setUser] = useState(userLocal)

    const log_user = (data) =>{
        setUser(data)
    }

    const userExist = () =>{
        if(user){
            return(true)
        }
        else{
            return(false)
        }
    }

    useEffect(() =>{
        localStorage.setItem("account", JSON.stringify(user))
    },[user])

    return(
    <UserContext.Provider
    value={{
    user,
    userExist,
    log_user
    }}>
        {children}
    </UserContext.Provider>
    )

}