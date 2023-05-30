import React from 'react';
import { useEffect, useState, useReducer, useContext,createContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

    function Orders() {

        const [users, setUsers] = useState([])
    
        function updateData(id){
            fetch('https://localhost:1105/api/Orders/'+id, {
                method: "Put"
                
            }).then((result) => {
                console.log(result)
               alert("Item Removed From Cart")
               window.location.reload();
            })
        }
     


        useEffect(() => {
            fetch('https://localhost:1105/api/Orders/GetOrders')
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
                  <div className='home_link_dash'>   <Button className='btn btn-primary'> <NavLink to="/admin" exact={true} className="home_link_dash">Go To Dashboard</NavLink></Button> </div> 
           <div className="Users" style={{marginTop:"25px", padding:"50px"}}>
                <h1> <b>Manage Orders </b></h1>
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
                            <td><select>        
            <option value={item.status}>{item.status}</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Dispatch">Dispatch</option>
            <option value="Delevered">Delevered</option>
       </select></td>
                            <td>{item.date}</td>
                            <td> <Button className='btn btn-success' type="submit" onClick={()=>updateData(item.id,item.totalPrice,item.status,item.date)}>Update </Button> </td>
                        </tr>
                    ))}
                   
                    
                    </tbody>
                </Table>
                
            </div>
            </>
        );


       
    }

 export default Orders;

