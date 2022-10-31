import React, { useEffect, useState } from "react";

import { NavLink } from 'react-router-dom'
import { control } from "../util";

const Dashbord = () => {

  const [bool, setBool]=useState(false)

 useEffect(() => {

 if(control()?.result.authorities[0].authority=="ROLE_admin"){
  setBool(true);
 
 }
 
 }, [])


 
 

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {bool==true ? 
            <>
           
            <li className="nav-item">
                <NavLink to='/category' className="nav-link active" aria-current="page" >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/product' className="nav-link" >
                 Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/order' className="nav-link" >
                 Order
                </NavLink>
              </li>
            </>:

            <>
             <li className="nav-item">
                <NavLink to='/products' className="nav-link active" aria-current="page" >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/orderlist' className="nav-link" >
                 Order
                </NavLink>
              </li>
            </>
            
      }

             

            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Dashbord;
