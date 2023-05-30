import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Admin() {
 
  return (
      <div>
       <h3>Welcome to the Admin Dashboard</h3>
       <ul style={{textAlign:"left"}}>
        <li>Here you can manage all the Products</li>
        <li>You can see the list of Users </li>
        
       </ul>
        <Navbar>
        <Container>
          
        <Nav className='home_link_dash' style={{marginTop:"5px",display:""}}>
       <Button className="btn btn-primary">   <NavLink to="/users" exact={true} className="home_link_dash1"> Manage Users</NavLink> </Button> &nbsp; &nbsp;
       <Button className="btn btn-primary">      <NavLink to="/addproduct" exact={true} className="home_link_dash1">Manage Products</NavLink> </Button>&nbsp; &nbsp;
       <Button className="btn btn-primary">      <NavLink to="/manageorders" exact={true} className="home_link_dash1">Manage Orders</NavLink></Button>&nbsp; &nbsp;
       <Button className="btn btn-primary">      <NavLink to="/logout" exact={true} className="home_link_dash1">Logout</NavLink></Button>&nbsp; &nbsp;
          </Nav>
        </Container>
      </Navbar>
      
      
      </div>
    );
  }
  
  export default Admin;