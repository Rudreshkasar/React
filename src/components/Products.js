import React from 'react';
import { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import Dashboard from './Dashboard';
import {NavLink} from "react-router-dom"

    function Products() {

        const [products, setProducts] = useState([]);
        const [item, setItem] = useState(true);
       const [ProductName, setProductName] = useState("");
       const [Price, setPrice] = useState("");
       const [TotalPrice, setTotaLPrice] = useState("");
       const [Quantity, setQuantity] = useState("");
       const [Product, setProduct] = useState("");
        
       const user = localStorage.getItem("id");
        function postData (product, productName, price,discount, quantity) {
            let data = {user,product,productName, price, quantity, totalPrice:((price*quantity)-discount)}
            // const body={
            //     user:{
            //         id:5
            //     },
            //     product:{
            //         id:product
            //     },
            //     productName:productName,
            //     price:price,
            //     quantity:quantity,
            //     totalPrice:price
            // }
            console.log(data)
            fetch('https://localhost:1105/api/Carts/PostCart', {
            method: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
             body:JSON.stringify(data)
               
        }).then((result) => {
            console.log(result)
    
        })
        }
       
        const fetchData = () => {
            fetch('https://localhost:1105/api/Products/GetProducts')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    setProducts(data)
                })
        }

        useEffect(() => {
            fetchData()
        }, [])

        return (
            <>

       <div className='home_link_dash'>   <Button className='btn btn-primary'> <NavLink to="/dashboard" exact={true} className="home_link_dash">Go To Dashboard</NavLink></Button> </div> 
        <div className="Users" style={{marginTop:"25px", padding:"50px"}}>
               
                <h1> <b>Products List </b></h1>
                 <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>ProductName</th>
                        <th>Seller</th>
                        <th>Price</th>
                        <th>Dicount</th>
                            <th>Quantity</th>
                            <th>Category</th>
                     </tr>
                    </thead>
                   <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>  
                            <td>{item.productName}</td> 
                            <td>{item.seller}</td>   
                            <td>{item.price}</td>   
                            <td>{item.discount}</td>  
                            <td>{item.quantity}</td> 
                            <td>{item.category}</td>  
                            
          <td> <Button type="button" onClick={()=>postData(item.id,item.productName,item.price,item.discount,1)}>AddCart </Button> </td>
                        </tr>
                    )) 
                }
                    
                    </tbody>
                    </Table>
               
             
            </div>
            </>
        );
    }

 export default Products;

