import { useState, useEffect } from "react";
import { getProducts } from "../data/data";

const useProducts = () => {
 const [products,setProducts] = useState ([])
 const [loading,setLoading] = useState(true)
 
 useEffect(()=>{
    setLoading(true)

    getProducts()
     .then((data) => setProducts (data))
     .catch((error) => console.log(error))
     .finally(() =>  console.log("Finalizo la pro"))
 },[])

 return { products,loading }
}

export default useProducts