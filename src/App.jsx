import NavBar from "./components/NavBar/NavBar/";
import ItemListContainerWithHoc from "./components/ItemListContainer/ItenListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <div className="container-app">
      <BrowserRouter>
       <NavBar />

       <Routes>
        <Route path= "/" element = {<ItemListContainerWithHoc />} />
        <Route path="/category/:idCategory" element = {<ItemListContainerWithHoc/>}/>
        <Route path="/detail/:idProduct" element = {<ItemDetailContainer />} />
       </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
