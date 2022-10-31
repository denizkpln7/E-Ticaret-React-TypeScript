
import { IJwt } from "../models/IJwt"
import { userConfig } from "./configs"




export const userLogin = ( email:string, password:string ) => {
    const sendParams = {
        username: email,
        password: password,
    }
    return userConfig.post<IJwt>("user/auth", sendParams )
}
