import{createContext,useState} from "react";
export const AuthContext =createContext();
export default function AuthProvider({children}) {
      const [user,setUser]= useState(
            JSON,parse(localStorage.getItem("user")) || null
      );
      const login =(data) =>{
            localStorage.setItem("user",JSON
,stringfy (data)) ;
setUser(data);
    };
    return(
      <AuthContext.Provider value={{user, login,logout}}>
            {children}
            </AuthContext.Provider>
    );
}