import { Navigate } from "react-router-dom";
import { control } from "../util";



export const ProtectedRouteUser = ({ children }:any) => {

  if (control()?.result.authorities[0].authority!="ROLE_user") {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};