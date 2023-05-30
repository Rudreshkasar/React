import React from 'react';
import { useEffect, useState, useReducer, useContext,createContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

    function Orders() {

        const [users, setUsers] = useState([])
       const UserId = localStorage.getItem("id")
    

     


        useEffect(() => {
            fetch('https://localhost:1105/api/Orders/GetByUId/'+UserId)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                   setUsers(data)
                })
      
       
        
        }, [])

        return (
         <>
                  <div className='home_link_dash'>   <Button className='btn btn-primary'> <NavLink to="/dashboard" exact={true} className="home_link_dash">Go To Dashboard</NavLink></Button> </div> 
           <div className="Users" style={{marginTop:"25px", padding:"50px"}}>
                <h1> <b>My Orders </b></h1>
                 <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>TotalPrice</th>
                        <th>Status</th>
                        <th>Date</th>
                     </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.totalPrice}</td>
                            <td>{item.status}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                   
                    
                    </tbody>
                </Table>
                
            </div>
            </>
        );


       
    }

 export default Orders;

