import Item from "./Item";
import "./item.css"

const ItemList = ({ products }) => {
  return (
    <div className="grid">
      {products.map((product) => (
        <Item  product ={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ItemList;
