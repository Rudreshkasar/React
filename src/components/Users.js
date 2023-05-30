import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

    function Users() {

        const [users, setUsers] = useState([])

        const fetchData = () => {
            fetch('https://localhost:1105/api/Users/GetUsers')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    setUsers(data)
                })
        }

        useEffect(() => {
            fetchData()
        }, [])

        return (
            
          <>
            <div className='home_link_dash'>   <Button className='btn btn-primary'> <NavLink to="/admin" exact={true} className="home_link_dash">Go To Dashboard</NavLink></Button> </div> 
            <div className="Users" style={{marginTop:"25px", padding:"50px"}}>
                <h1> <b>Users List </b></h1>
                 <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Address</th>
                            <th>Phone</th>
                            <th>Type</th>
                     </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>{item.type}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            </>
        );
    }

 export default Users;