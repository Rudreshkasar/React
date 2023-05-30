import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"

import Register from './components/Register';
import './components/Register.css';
import Navmenu from './components/Navmenu';
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import './components/Login.css'
import Logout from './components/Logout';
import Carts from './components/Carts';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Orders from './components/Orders';
import ManageOrders from './components/ManageOrders';


  function App(){

    return (
     
      <div className="App">
   
        <Navmenu />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="users" element={ <Users/> } />
        <Route path="products" element={ <Products/> } />
        <Route path="addproduct" element={ <AddProduct/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="logout" element={ <Logout/> } />
        <Route path="carts" element={ <Carts/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
        <Route path="logout" element={ <Logout/> } />
        <Route path="admin" element={ <Admin/> } />
        <Route path="orders" element={ <Orders/> } />
        <Route path="manageorders" element={ <ManageOrders/> } />
      </Routes>
   
    </div>
    
    );
    }
    export default App;

