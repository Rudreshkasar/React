import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';






function Navmenu() {
 
  return (
      <div>
       
        <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <NavLink to="/" exact={true} className="home_link">Home</NavLink>
            <NavLink to="register" className="home_link">Register</NavLink>
            <NavLink to="login" className="home_link">Login</NavLink>
           {/* <NavLink to="users" className="home_link">Users</NavLink>
            <NavLink to="products" className="home_link">Products</NavLink>
            <NavLink to="addproduct" className="home_link">Add Product</NavLink>
            <NavLink to="login" className="home_link">Login</NavLink>
            <NavLink to="logout" className="home_link">Logout</NavLink>
  <NavLink to="carts" className="home_link">Cart</NavLink> */}
          </Nav>
        </Container>
      </Navbar>
      
      
      </div>
    );
  }
  
  export default Navmenu;