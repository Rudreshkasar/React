import React from "react";

import {useState, useEffect} from "react";


function ProductDetails(){
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [item, setItem] = useState(true);

    const handleAdd = (users) =>{
        dispatch(add(users));
    };
    
    const handleItem = () =>{
        setItem("item", JSON.stringify(item))
    }

    return(
        <h5>Pd</h5>
    )
}
export default ProductDetails;