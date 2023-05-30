import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Logout() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        localStorage.clear();
      let path = `/login`; 
      navigate(path);
    }

    return(
        <><div><h1>Click Confirm to Logout </h1>
         </div><button type="click" className="btn btn-primary" onClick={routeChange}>
            Confirm
        </button></>
    )
}
export default Logout;