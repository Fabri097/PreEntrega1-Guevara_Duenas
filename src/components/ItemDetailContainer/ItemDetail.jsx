


const ItemDetail = (product) => {
  return (
    <div className="product-card">
        <img src={product.image} width={500} alt="" />
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>precio:{product.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail
