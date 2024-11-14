import { useState } from "react";
import "./contado.css";

const Contador = ({ stock, addProduct }) => {
  const [contador, setContador] = useState(1);

  const handleClickRest = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleClickAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  return (
    <>
      <div className="contenedor-contador">

        <div className="contador">
          
          <button className="restar" onClick={handleClickRest}>  
            -
          </button>

          <p className="numero">{contador}</p>

          <button className="agregar" onClick={handleClickAdd}>
            +
          </button>
        </div>

        <div className="agregar-carrito">
          <button onClick={() => addProduct(contador)}>
            Agregar al Carrito
          </button>
        </div>

      </div>
    </>
  );
};

export default Contador;
