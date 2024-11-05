import { useState } from "react";
import FormCheckout from "./FormCheckout"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../db/db"
import { Link } from "react-router-dom";


const checkout = () => {
    const [dataForm, setDataForm] = useState ({
        fullname: " ",
        phone:" ",
        email:" "
    })
    const [idOrder, setIdOrder] = useState(null)
    const {cart, totalPrice, deleteCart} = useContext(CartContext)
   
    const handleChangeImput = (event) =>{
        setDataForm({...dataForm,[event.target.name]: event.target.value})
    }

    const handleSubmitForm = (event) =>{
        event.preventDefault()

        const order ={
            buyer:{...dataForm},
            products:[...cart],
            Date: Timestamp.fromDate(new Date()),
            total:totalPrice()
        }

    uploadOrder(order)
    }

    const uploadOrder = (newOrder)=>{
      const ordersRef = collection(db, "orders")
      addDoc(ordersRef, newOrder)
       .then((response)=>setIdOrder(response.id))
       .catch((error) => console.log(error))
       .finally(()=>{
        updateStock()
       })
    }

    const updateStock = ( ) =>{
        cart.map(({id,quanty,...dataProduct})=>{
            const productRef = doc(db,"products",id)
            setDoc(productRef,{...dataProduct,stock: dataProduct.stock - quanty})
        })

        deleteCart()
    }

    return(
        <div>
            {
        idOrder === null ? (
          <FormCheckout
            dataForm={dataForm}
            handleChangeInput={handleChangeImput}
            handleSubmitForm={handleSubmitForm} />
        ) : (
          <div>
            <h2>Su orden se subio correctamente!😁</h2>
            <p>Porfavor guarde su nro de seguimiento: {idOrder}</p>
            <Link to="/">Volver al inicio</Link>
          </div>
        )
      }
        </div>
    )
}

export default checkout