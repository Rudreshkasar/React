
import React from 'react';
import { useState,useEffect }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import {Table} from "react-bootstrap"


function AddProduct() {

    const [ProductName, setProductName] = useState("");
    const [Seller, setSeller] = useState("");
    const [Price, setPrice] = useState("");
    const [Discount, setDiscount] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Category, setCategory] = useState("");
   const [Products, setProducts] = useState([]);
    

    function addProduct() {
      
        let data = { ProductName, Seller, Price, Discount, Quantity, Category }
  

        fetch('https://localhost:1105/api/Products/AddProduct', {
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
    
    function deleteProduct(id){
        fetch('https://localhost:1105/api/Products/Delete/'+id, {
            method: "DELETE"
            
        }).then((result) => {
            console.log(result)
           
        })
    }
    return (
        <>
        <div className='home_link_dash'>   <Button className='btn btn-primary'> <NavLink to="/admin" exact={true} className="home_link_dash">Go To Dashboard</NavLink></Button> </div> 
        <div className="div1 " >
            <h1>Add Product</h1>
            <div className="div2">
            <Form className = "form">
                    <Form.Label>ProductName: <br />
                        <Form.Control type="text" name="firstName" value={ ProductName} onChange={(e) => { setProductName(e.target.value) } }  /> </Form.Label><br /> 
                        
                    <Form.Label>Seller:  <br /> <Form.Control type="text" name="lastName" value={Seller} onChange={(e) => { setSeller(e.target.value) }} /></Form.Label>  <br />
                    
                    <Form.Label>Price:  <br /> <Form.Control type="text" name="email" value={Price} onChange={(e) => { setPrice(e.target.value) }} /></Form.Label>  <br />
                    
                    <Form.Label>Discount:  <br /> <Form.Control type="text" name="password" value={Discount} onChange={(e) => { setDiscount(e.target.value) }} /></Form.Label>  <br />
                   
                    <Form.Label>Quantity:  <br /> <Form.Control type="text" name="address" value={Quantity} onChange={(e) => {  setQuantity(e.target.value) }} /></Form.Label>  <br />
                   
                    <Form.Label>Category:  <br /> <Form.Control type="text" name="phone" value={Category} onChange={(e) => { setCategory(e.target.value) }} /></Form.Label>  <br />
                    
                   
                    <Button type="submit" onClick={addProduct}>Submit </Button>
                </Form>
               
                </div>
     
                <div className="Users" style={{marginTop:"25px", padding:"100px"}}>
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
                    {Products.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>  
                            <td>{item.productName}</td> 
                            <td>{item.seller}</td>   
                            <td>{item.price}</td>   
                            <td>{item.discount}</td>  
                            <td>{item.quantity}</td> 
                            <td>{item.category}</td>  
                            
            <td><Button className='btn btn-danger' onClick={() =>{deleteProduct(item.id)}}> Delete</Button></td>
                        </tr>
                    )) 
                }
                    
                    </tbody>
                    </Table>
                </div>
 
        </div>
        
        
        
        </>
        
        );

   
}
export default AddProduct;
