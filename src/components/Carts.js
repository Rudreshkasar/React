import React from 'react';
import { useEffect, useState, useReducer, useContext,createContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

    function Carts() {

        const [users, setUsers] = useState([])
       const UserId = localStorage.getItem("id")
       const [TotalPrice,setTotaLPrice]=useState(60000)
       const [Status,setStatus]=useState("Pending")
    

        function postOrder(){
           // let data={UserId,TotalPrice,Status}

            fetch('https://localhost:1105/api/Orders/PostOrder',{
                method:"Post",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    User:UserId,
                    TotalPrice:60000,
                    Status:"Pending",
                    Date: 12/21/2022
                })
            }).then((result)=>{
                console.log(result);
            })
        }
        function deleteData(id){
            fetch('https://localhost:1105/api/Carts/'+id, {
                method: "Delete"
                
            }).then((result) => {
                console.log(result)
               alert("Item Removed From Cart")
               window.location.reload();
            })
        }


        useEffect(() => {
            fetch('https://localhost:1105/api/Carts/Cart/'+UserId)
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
                <h1> <b>Cart </b></h1>
                 <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>TotalPrice</th>
                     </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                           
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalPrice}</td>
                            <td> <Button className='btn btn-danger' type="submit" onClick={()=>deleteData(item.id)}>Remove </Button> </td>
                        </tr>
                    ))}
                   
                    
                    </tbody>
                </Table>
                <Button type="submit" onClick={postOrder}>Place Order</Button>
            </div>
            </>
        );


        // const  products = useSelector((state) => state.Carts);

        // return(
        //    <div>
        //        {
        //            products.map((users) => (
        //                <div>
        //             <h5>{users.price}</h5>  
        //             <h5>{users.productName}</h5> 
        //             </div>
        //            ))
        //        }
        //    </div>
        // )
    }

 export default Carts;

