import React, { useEffect, useState } from "react";
import { Result } from "../models/ICategory";
import {
  categoryAdd,
  categoryById,
  categoryByUpdate,
  categoryDelete,
  categoryGet,
} from "../services/categoryService/category";
import { control } from "../util";
import { useNavigate } from "react-router-dom";
import { ResultById } from "../models/ICateById";

const Category = () => {
  const [category, setCategory] = useState<Result[]>();
  const [cat, setCat] = useState("");
  const [upcat, setUpcat] = useState<ResultById>({
    id: 0,
    ad:""
  });
  // const navigate = useNavigate();

  useEffect(() => {
    update();
  }, []);

  const update = () => {
    if (control()?.jwt) {
      categoryGet().then((res) => {
        return setCategory(res.data.result);
        console.log(res.data);
      });
    }
    console.log(category);
  };

  function deleteCate(id: number): void {
    console.log(control());
    categoryDelete(id).then((res) => {
      console.log(res.data);
      update();
    });
  }

  const sendFnc = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (cat != "") {
      categoryAdd(cat).then((res) => {
        alert("başarıyla kaydedildi");
        update();
      });
    } else {
      alert("kategori giriniz");
    }
  };

  function updateCatForm(id: number): void {
    categoryById(id).then(res=>{
      setUpcat(res.data.result)
    })
  }

  function updateById(id: number, ad: string) {
    categoryByUpdate(id,ad).then(res=>{
      console.log(res.data);
      update()
    })
  }

 console.log(upcat)
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={sendFnc} method="post">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Kategori Giriniz
              </label>
              <input
                value={cat}
                onChange={(evt) => setCat(evt.target.value)}
                type="text"
                className="form-control"
                id="text"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="bi bi-person"></i> Ekle
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">İsmi</th>
                <th scope="col">Düzenle</th>
                <th scope="col">Sil</th>
              </tr>
            </thead>
            <tbody>
              {category?.map((m, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{m.ad}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={()=>updateCatForm(m.id)}
                    >
                      Düzenle
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteCate(m.id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <div className="modal-body">
              <form onSubmit={sendFnc} method="post">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Kategori Giriniz
              </label>
              <input
                value={upcat.ad}
                onChange={(evt) => setUpcat({...upcat,ad:evt.target.value})}
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
                <button onClick={()=>{updateById(upcat.id,upcat.ad)}} type="button" className="btn btn-primary"  data-bs-dismiss="modal"
                  aria-label="Close">
                  Güncelle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;





