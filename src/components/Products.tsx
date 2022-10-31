import React, { useEffect, useState } from "react";
import { Result } from "../models/ICategory";
import { ResultPro } from "../models/IProduct";
import { categoryGet } from "../services/categoryService/category";
import {
  categoryProById,
  deleteById,
  getByIdProduct,
  productGet,
  productSave,
  productUpdate,
} from "../services/productService/product";
import { useNavigate } from 'react-router-dom'
import { control } from "../util";

const ProductsList = () => {

  const navigate = useNavigate()
  const [category, setCategory] = useState<Result[]>();
  const [product, setProduct] = useState<ResultPro[]>();
  
  const [goProduct,setGoProduct]=useState<ResultPro>()

 

  

  useEffect(() => {
    update();
    getProductall();
  }, []);

  const update = () => {
    if (control()?.jwt) {
      categoryGet().then((res) => {
        setCategory(res.data.result);
       
      });
    }
   
  };

  function getCatByProducts(id: number): void {
    categoryProById(id).then((res) => {
      setProduct(res.data.result);
    });
  }

  function getProductall(): void {
    productGet().then((res) => {
      setProduct(res.data.result);
     
    });
  }

   

function gotoDetail(pro: ResultPro): void {
    getByIdProduct(pro.id).then((res)=>{
        // setGoProduct(res.data.result)
         navigate('/detail/'+ pro.id, { state: pro } )
     })
}



  



  return (
    <div>
      <div className="container">
        <div className="product-area">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <ul className="nav flex-column">
                    <h2>Kategoriler</h2>
                    <li onClick={() => getProductall()} className="nav-item">
                      <a className="nav-link" href="#">
                        Hepsi
                      </a>
                    </li>
                    {category?.map((cat) => (
                      <li
                        onClick={() => getCatByProducts(cat.id)}
                        className="nav-item"
                      >
                        <a className="nav-link" href="#">
                          {cat.ad.substring(0, 1).toUpperCase() +
                            cat.ad.substring(1, cat.ad.length)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-9">
                  <div className="productarea">
                    <div className="row">
                      {product?.map((pro) => (
                        <div className="col-md-4">
                          <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{pro.name}</h5>
                              <p className="card-text">{pro.text}</p>
                              <p className="card-text">{pro.price}TL</p>
                              <button  className="btn btn-primary pr-2"
                              onClick={()=>gotoDetail(pro)}
                               type="button"
                             >
                               Detayına Git
                              </button>
                             
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

         

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;


