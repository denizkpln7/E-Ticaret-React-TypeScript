import { IProduct } from "../../models/IProduct"
import { siteConfig } from "../configs"


export const productGet = ( ) => {
   
    return siteConfig.get<IProduct>("product/getpro" )
}

export const categoryProById = ( id:number ) => {
    const sendData = {
        id:id
    }
    return siteConfig.get<IProduct>("product/getcatepro" ,  { params: sendData })
}

export const productSave = ( procat:any ) => {
    const sendData = {
    cid:procat.cid,
    name:procat.name,
    image:procat.image,
    text:procat.text,
    price:procat.price
    }
    return siteConfig.post("product/save" ,   sendData )
}

export const deleteById = ( id:number ) => {
    const sendData = {
        id:id
    }
    return siteConfig.get<IProduct>("product/deletepro" ,  { params: sendData })
}


export const getByIdProduct = ( id:number ) => {
    const sendData = {
        id:id
    }
    return siteConfig.get("product/getproid" ,  { params: sendData })
}


export const productUpdate = ( procat:any ) => {
    const sendData = {
    id:procat.id,    
    cid:procat.cid,
    name:procat.name,
    image:procat.image,
    text:procat.text,
    price:procat.price
    }
    return siteConfig.post("product/update" ,   sendData )
}

export const getUser = ( email:String ) => {
    const sendData = {
        email:email
    }
    return siteConfig.get("product/getuser" ,  { params: sendData })
}

