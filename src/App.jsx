import NavBar from "./components/NavBar/NavBar/";
import ItemListContainerWithHoc from "./components/ItemListContainer/ItenListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark"/>

          <Routes>
            <Route path="/" element={<ItemListContainerWithHoc />} />
            <Route path="/category/:idCategory" element={<ItemListContainerWithHoc />}/>
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
