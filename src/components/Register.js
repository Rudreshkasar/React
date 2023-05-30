import React from 'react';
import { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Register() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const [Type, setType] = useState("User");
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState("");
 
    const handleSubmit = (e) =>{
e.preventDefault();
if(FirstName.length == 0 || LastName.length ==0 || Email.length==0 || Password.length==0 || Address.length ==0 || Phone.length == 0){
   setErr(true)
  
}
if(FirstName&&LastName&&Email&&Password&&Address&&Phone){
    console.log(FirstName, LastName, Email, Password, Address, Phone);
    setMessage("You Have Registered Succesfully, Kindly Login With Your Credentials");
}
        
    }
    function saveUser() {
      
        let data = { FirstName, LastName, Email, Password, Address, Phone, Type }

        fetch('https://localhost:1105/api/Users/PostUser', {
            method: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            
            
        }).then((result) => {
            console.log(result);
        
        })
            
       
    }

    
    return (

        <div className="div1 " >
              
            <h1>Register Page</h1>

         
            <div className="div2">
            <Form className = "form" onSubmit={handleSubmit}>
  
                    <Form.Label><b>FirstName:</b> <br />
                        <Form.Control type="text" name="firstName" placeholder="Enter first name" value={FirstName} onChange={(e) => { setFirstName(e.target.value) } }  />  <br />
                        {err&&FirstName.length<=0?<label style={{color:"red"}}>FirstName is Required</label>:""}</Form.Label> <br />
                    <Form.Label><b>LastName:</b> <br /> <Form.Control type="text" name="lastName" placeholder="Enter last name" value={LastName} onChange={(e) => { setLastName(e.target.value) }} /></Form.Label>  <br />
                    {err&&LastName.length<=0?<label style={{color:"red"}}>LastName is Required</label>:""} <br />
                    <Form.Label><b>Email:</b> <br /> <Form.Control type="email" name="email" placeholder="Enter email" value={Email} onChange={(e) => { setEmail(e.target.value) }} /></Form.Label>  <br />
                    {err&&Email.length<=0?<label style={{color:"red"}}>Email is Required</label>:""} <br />
                    <Form.Label><b>Password:</b>  <br /> <Form.Control type="password" name="password" placeholder="Enter password" value={Password} onChange={(e) => { setPassword(e.target.value) }} /></Form.Label>  <br />
                    {err&&Password.length<=0?<label style={{color:"red"}}>Password is Required</label>:""} <br />
                    <Form.Label><b>Address:</b> <br /> <Form.Control type="text" name="address" placeholder="Enter address" value={Address} onChange={(e) => { setAddress(e.target.value) }} /></Form.Label>  <br />
                    {err&&Address.length<=0?<label style={{color:"red"}}>Address is Required</label>:""} <br />
                    <Form.Label><b>Phone:</b> <br /> <Form.Control type="text" name="phone"placeholder="Enter phone" value={Phone} onChange={(e) => { setPhone(e.target.value) }} /></Form.Label>  <br />
                    {err&&Phone.length<=0?<label style={{color:"red"}}>Phone is Required</label>:""} <br /> <br />
                   
                    <Button type="submit" onClick={saveUser}>Submit </Button>
                </Form>

                <p style={{fontWeight:"bold", color:"green"}}>{message}</p>
                </div>
         
              
                
          
        </div>
        
        
        
        
        );

}
export default Register;
