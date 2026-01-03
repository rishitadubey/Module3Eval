import{Navigate} from "react-router-dom";
import{useContext} from "react";
import{AuthContext} from "../AuthContext";

export default function ProyrctedRoute({ children
,role}){
      const {user}=
      useContext(AuthContext);
      if(!user) return<Navigate to ="/" />;
      if(user.role !==role ) return
      <Navigate to ="/">;
      return children;
}
      