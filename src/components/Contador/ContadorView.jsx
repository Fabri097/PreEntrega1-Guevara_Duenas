import "./contado.css/";

const ContadorView = ({ contador, aumentarContador, restarContador,agregar}) => {
  return (
    <div className="conta">
      <p className="cant">{contador} </p>
      <button className="aumentar" onClick={aumentarContador}>+</button>
      <button className="restar" onClick={restarContador}>-</button>
      <button className="agre" onClick={agregar}>Agregar carrito</button>
    </div>
  );
};
export default ContadorView;
