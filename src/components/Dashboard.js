import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Change(){

let navigate = useNavigate(); 

    let path = `/products`; 
    navigate(path);
  

}




function Dashboard() {
 
  return (
      <div>
        <h3>Welcome to the Dashboard </h3>
       
        <Navbar>
        <Container>
          
        <Nav className='home_link_dash' style={{marginTop:"5px",display:""}}>
       <Button className="btn btn-primary">   <NavLink to="/products" exact={true} className="home_link_dash1">ViewProducts</NavLink> </Button> &nbsp; &nbsp;
       <Button className="btn btn-primary">      <NavLink to="/carts" exact={true} className="home_link_dash1">MyCart</NavLink> </Button>&nbsp; &nbsp;
       <Button className="btn btn-primary">      <NavLink to="/orders" exact={true} className="home_link_dash1">MyOrders</NavLink></Button>&nbsp; &nbsp;
       <Button className="btn btn-primary">      <NavLink to="/logout" exact={true} className="home_link_dash1">Logout</NavLink></Button>&nbsp; &nbsp;
          </Nav>
        </Container>
      </Navbar>
      
      
      </div>
    );
  }
  
  export default Dashboard;