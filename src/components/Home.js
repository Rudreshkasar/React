import React from "react";





function Home(){
      localStorage.clear();
    
    
    return(
        <>
        <h1>Welcome to the Order Management System</h1>
       <ul style={{textAlign:"left",marginTop:"25px"}}>
       <b> <li> Please Register yourself with our System first.</li> </b>
       <li>To Register please click on the Register button present at top</li>
       <li>Now fill out all the required details to Register </li>
       <li>Once you have registered succefully please login with your credentials </li>

       <b>  <li>If you have already registered with us , Please Login in with your Email and Password. </li> </b>
       <li>To Login into the system clickon the Login button present at top </li>
        </ul>
       
        </>
    )
}
export default Home;