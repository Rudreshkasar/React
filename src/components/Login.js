import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


 function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/products`; 
    navigate(path);
  }
 


   function signIn(){
    fetch("https://localhost:1105/api/Users/GetByEmail/"+Email+"/"+Password)
    .then(response => {
       response.json().then((result) =>{
           console.log(result);
           if(result.id==0){
             alert("Invalid Email or Password")
             window.location.reload();
           }
           else{
             if(result.id==1){
               window.location.href='/admin';
             }
             else{
             localStorage.setItem("id",result.id)
             window.location.href='/dashboard';
             }
           }
       })
    })
   }
  

    return (
    <div className="Auth-form-container">
      <Form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
          <Form.Label>Email Address <br /> <Form.Control type="email" name="email" placeholder="Enter email" value={Email} onChange={(e) => { setEmail(e.target.value) }} required/></Form.Label>  <br />
          </div>
          <div className="form-group mt-3">
          <Form.Label>Password <br /> <Form.Control type="password" name="password" placeholder="Enter password"value={Password} onChange={(e) => { setPassword(e.target.value) }} required /></Form.Label>  <br />
          </div>
       
          <div className="d-grid gap-2 mt-3">
          <button type="button" className="btn btn-primary" onClick={signIn}>
              Submit
            </button>
          </div>
          
        </div>
      </Form>

    </div>
  )
}
export default Login;