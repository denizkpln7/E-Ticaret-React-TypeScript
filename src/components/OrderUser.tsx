import React, { useEffect, useState } from 'react'
import { ResultOrder } from '../models/IOrder';
import { deleteOrderby, OrderbyUser} from '../services/orderService/order';
import { getUser } from '../services/productService/product';
import { control } from '../util';

const OrderUser = () => {

    const [order, setOrder] = useState<ResultOrder[]>();

    const [userid ,setId]=useState<number>();
    const [mailuser, setMail]=useState(control()?.result.username)
     
    console.log(mailuser)

   

    useEffect(() => {
      
    
     
        if(mailuser){
          getUser(mailuser).then(res=>{
             setId(res.data.result.id)
             getOrderList()
          })
        }
    }, )
        
    
      const getOrderList=()=>{
        if(userid){
            OrderbyUser(userid).then((res) => {
              setOrder(res.data.result)
          });
        }
      }

      function deleteOrder(id: number): void {
        deleteOrderby(id).then(res=>{
          alert(res.data.result)
          getOrderList()
        })
      }
         


  return (
    <div className='container'>
      
      <div className='row'>
         {order?.map((o)=>(
        <div className='col-md-4 mt-5'>
           <div className="card" >
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{o.name}</h5>
            <p className="card-text">{o.text}</p>
            <p className="card-text">{o.price}</p>
            <button onClick={()=>deleteOrder(o.id)} className="btn btn-primary">İptal Et</button>
          </div>
        </div>
        </div>
         
        ))} 
      </div>
    </div>
  )
}

export default OrderUser

