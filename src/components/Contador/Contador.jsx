import { useState, useEffect } from "react";
import ContadorView from "./ContadorView";

const Contador = () => {
  const [contador, setContador] = useState(0);
 
  const aumentarContador = () => {
    if (contador === 5) {
      alert("alzanzaste maximo de stock");
    } else if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador <= 0) {
      alert("Agregue un producto");
    } else if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const agregar = () => {
    if (contador === 0) {
      alert("Su carrito está vacío");
    } else {
      alert(`Se agregaron ${contador} productos a su carrito`);
    }
  };

  

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect(() => {
    console.log("1er useEffect");
  }, []);

  //se ejecuta en el montaje y cada vez que "contador" cambie
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect(() => {
    console.log("2do useEffect");
  }, [contador]);

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado del componente
  //ej: operaciones globales de monitoreo o registra, actualizaciones generales del componente
  useEffect(() => {
    console.log("3er useEffect");
  });

  return (
    <>
      <ContadorView
        contador={contador}
        aumentarContador={aumentarContador}
        restarContador={restarContador}
        agregar={agregar}
      />

    </>
  );
};
export default Contador;
