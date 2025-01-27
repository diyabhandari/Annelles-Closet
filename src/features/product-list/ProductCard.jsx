import styles from "./ProductList.module.css"

export const ProductCard = ({product}) => {
  return(
    <div className = "product-list-card">
      <div className = "product-name">{product.name}</div>
      <div className = "product-image">
        <img src = {product.imageSrc} alt = {product.imageAlt} />
      </div>
      <div className = "product-details">
        <div className = "product-price">{product.price}</div>
        <div className = "add-to-cart"></div>
      </div>
    </div>
  )

}