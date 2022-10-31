import { ICateByID } from "../../models/ICateById"
import { ICategory } from "../../models/ICategory"
import { siteConfig } from "../configs"


export const categoryGet = ( ) => {

    return siteConfig.get<ICategory>("category/get")
}

export const categoryDelete = ( id:any ) => {
    const sendData = {
        id: id
    }
    return siteConfig.get("category/delete" , { params: sendData })
}

export const categoryAdd = ( ad:String ) => {
    const sendData = {
        ad:ad
    }
    return siteConfig.post("category/save" , sendData)
}

export const categoryById = ( id:number ) => {
    const sendData = {
        id:id
    }
    return siteConfig.get<ICateByID>("category/getbyid" ,  { params: sendData })
}


export const categoryByUpdate = ( id:number, ad:String ) => {
    const sendData = {
        id:id,
        ad:ad
    }
    return siteConfig.post("category/update" ,   sendData )
}

