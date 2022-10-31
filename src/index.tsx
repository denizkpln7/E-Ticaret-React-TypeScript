import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashbord from './components/Dashbord';
import ProductsList from './components/ProductsList';
import Category from './components/Category';
import OrderList from './components/OrderList';
import Products from './components/Products';
import Detail from './components/Detail';
import OrderUser from './components/OrderUser';
import { ProtectedRoute } from './security/ProtectedRoute';
import { ProtectedRouteUser } from './security/ProtectedRouteUser';
import Navbar from './components/Navbar';



const routes =
<>

<BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/dashbord' element={<Dashbord/>} />
    <Route path='/category' element={<ProtectedRoute><Category/></ProtectedRoute>} />
    <Route path='/product' element={<ProtectedRoute><ProductsList/></ProtectedRoute>} />
    <Route path='/order' element={<ProtectedRoute><OrderList/></ProtectedRoute>} />
    <Route path='/products' element={<ProtectedRouteUser><Products/></ProtectedRouteUser>} />
     <Route path='/detail/:pid' element={<ProtectedRouteUser><Detail/></ProtectedRouteUser>} />
     <Route path='/orderlist' element={<ProtectedRouteUser><OrderUser/></ProtectedRouteUser>} /> 
  </Routes>
</BrowserRouter>
</> 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);


