import { Navigate } from "react-router-dom";
import { control } from "../util";



export const ProtectedRoute = ({ children }:any) => {

  if (control()?.result.authorities[0].authority!="ROLE_admin") {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};