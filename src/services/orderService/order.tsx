import { IOrder } from "../../models/IOrder"
import { siteConfig } from "../configs"



export const getOrder = () => {
    return siteConfig.get<IOrder>("order/getorder")
}


export const deleteOrderby = ( id:number ) => {
    const sendData = {
        id:id
    }
    return siteConfig.get("order/delete" ,  { params: sendData })
}

export const orderSave = ( uid:number, pid:number ) => {
    const sendData = {
        uid:uid,
        pid:pid
    }
    return siteConfig.post("order/save" ,   sendData )
}


export const OrderbyUser = ( id:number ) => {
    const sendData = {
        id:id
    }
    return siteConfig.get<IOrder>("order/getorderby" ,  { params: sendData })
}

