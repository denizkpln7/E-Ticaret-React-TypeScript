import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { orderSave } from "../services/orderService/order";
import { getUser } from "../services/productService/product";
import { control } from "../util";

const Detail = () => {
  const [item, setItem] = useState({
    name:"",
    id:0,
    price:0,
    text:""
  });
  const [userid ,setId]=useState<number>();

  const mail=control()?.result.username

  const { pid } = useParams();
  const loc = useLocation();
  useEffect(() => {
    if (loc.state) {
      const itm = loc.state;
      setItem(itm);
    } else {
    }
  }, []);

  useEffect(() => {
    if(mail){
      getUser(mail).then(res=>{
         setId(res.data.result.id)
      })
    }
    
  
   
  }, [])
  

  function addBasket(item: { name: string; id: number; price: number; text: string; }): void {
    if(userid){
      orderSave(userid,item.id).then(res=>{
        alert(res.data.result)
      })
    }
    
  }
  
  

  return (
    <div className="container">
      <div className="card mt-5">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item?.name}</h5>
          <p className="card-text">
          {item.text}
          </p>
          <button onClick={()=>addBasket(item)}  className="btn btn-primary">
           Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
