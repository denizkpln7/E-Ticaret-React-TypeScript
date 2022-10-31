import axios from "axios";
import { control } from "../util";


const baseURL = 'http://localhost:8090/'
//const proxy = { host: 'localhost', port: 3000, protocol: 'http' }
const timeout = 15000
export const userConfig = axios.create({
    baseURL: baseURL,
    timeout: timeout,
})


export const siteConfig = axios.create({
    baseURL: baseURL,
    timeout: timeout,
    headers: { 'Authorization': 'Bearer ' + control()?.jwt }
})