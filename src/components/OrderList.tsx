import React, { useEffect, useState } from "react";
import { ResultOrder } from "../models/IOrder";
import { deleteOrderby, getOrder } from "../services/orderService/order";
import { control } from "../util";

const OrderList = () => {
  const [order, setOrder] = useState<ResultOrder[]>();


  let name;

  if(control()){
    name=control()
    
  }
  console.log(name)

  useEffect(() => {
    getOrderList()
  },[]);

  const getOrderList=()=>{
    getOrder().then((res) => {
        console.log(res.data.result)
        setOrder(res.data.result);
      });
  }

  function deleteOrder(id: number): void {
    console.log(id)
    deleteOrderby(id).then((res)=>{
        alert(res.data.result)
        getOrderList()
    })
   }


  return (
    <div className="container">
      <div className="row">
  
        {order?.map((or) => (
        <div className="col-md-4">    
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{or.name}</h5>
              <p className="card-text">
               {or.text}
              </p>
              <p className="card-text">
               {or.price}TL
              </p>
              <button onClick={()=>deleteOrder(or.id)} className="btn btn-danger">
                Siparişi iptal et
              </button>
            </div>
          </div>
         </div> 
        ))}
      </div>
    </div>
  );
};

export default OrderList;

