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
import { control } from "../util";

const ProductsList = () => {
  const [category, setCategory] = useState<Result[]>();
  const [product, setProduct] = useState<ResultPro[]>();
  const [procat,setProCat]=useState({
    cid:0,
    name:  "",
    image:"",
    text:"",
    price:0
  })

  const [updateCat,setUpdate]=useState({
    id:0,
    cid:0,
    name:  "",
    image:"",
    text:"",
    price:0
  })

  

  useEffect(() => {
    update();
    getProductall();
  }, []);

  const update = () => {
    if (control()?.jwt) {
      categoryGet().then((res) => {
        setCategory(res.data.result);
        console.log(res.data);
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

  function deleteProduct(id:any): void {
    deleteById(id).then((res) => {
      alert(res.data.result);
      getProductall()
    });
  }

   function addProduct(evt:React.FormEvent): void {
    evt.preventDefault()
     productSave(procat).then((res) => {
      
       getProductall()
     });
     
   }
   

   function getUpdatePro(id: number): void {
    getByIdProduct(id).then(res=>{
      setUpdate(res.data.result);
    })
  }
  
  function updateProductby(): void {
    productUpdate(updateCat).then((res)=>{
      getProductall()
    })
  }
   
  



  return (
    <div>
      <div className="container">
        <div className="product-area">
          <div className="row">
            <div className="col-md-4">
            <form onSubmit={addProduct}  method="post">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ürünün adını Giriniz
              </label>
              <input
                value={procat.name}
                 onChange={(evt) => setProCat({...procat, name:evt.target.value})}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ürünün açıklamasını giriniz
              </label>
              <input
                value={procat.text}
                 onChange={(evt) => setProCat({...procat, text:evt.target.value})}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ürünün fiyatını giriniz
              </label>
              <input
                value={procat.price}
                 onChange={(evt) => setProCat({...procat, price:Number(evt.target.value)})}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="input-group mb-3">
               <button   type="button" className="btn btn-outline-secondary">Kategoriler</button>
               <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
               <span className="visually-hidden">Toggle Dropdown</span>
               </button>
                <ul className="dropdown-menu">
                
                 {category?.map((cat)=>(
                   <li onClick={()=>setProCat({...procat,cid:cat.id})}><a className="dropdown-item">{cat.ad.substring(0, 1).toUpperCase() +
                            cat.ad.substring(1, cat.ad.length)}</a></li>
                 ))}

                </ul>
 
            </div>

            <button  type="submit" className="btn btn-primary">
              <i className="bi bi-person"></i> Ekle
            </button>
          </form>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
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
                <div className="col-md-8">
                  <div className="productarea">
                    <div className="row">
                      {product?.map((pro) => (
                        <div className="col-md-6">
                          <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{pro.name}</h5>
                              <p className="card-text">{pro.text}</p>
                              <p className="card-text">{pro.price}TL</p>
                              <button  className="btn btn-primary pr-2"
                              onClick={()=>getUpdatePro(pro.id)}
                               type="button"
                               data-bs-toggle="modal"
                               data-bs-target="#exampleModal">
                                Güncelle
                              </button>
                              <a onClick={()=>deleteProduct(pro.id)}  className="btn btn-primary">
                               Sil
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"
              
              >
              <form  method="post">
               
              <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ürünün adını Giriniz
              </label>
              <input
                value={updateCat.name}
                 onChange={(evt) => setUpdate({...updateCat, name:evt.target.value})}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ürünün adını Giriniz
              </label>
              <input
                value={updateCat.text}
                 onChange={(evt) => setUpdate({...updateCat, text:evt.target.value})}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Ürünün adını Giriniz
              </label>
              <input
                value={updateCat.price}
                 onChange={(evt) => setUpdate({...updateCat, price:Number(evt.target.value)})}
                type="text"
                className="form-control"
                id="text"
              />
            </div>

          </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                Kapat
                </button>
                <button onClick={()=>updateProductby()}   type="button" className="btn btn-primary"  data-bs-dismiss="modal"
                  aria-label="Close">
                  Güncelle
                </button>
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

