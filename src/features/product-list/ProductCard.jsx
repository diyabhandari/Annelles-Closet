import styles from "./ProductList.module.css"

export const ProductCard = ({product}) => {
  return(
    <div className = {styles["product-list-card"]}>
      <div className = {styles["product-name"]}>{product.name}</div>
      <div className = {styles["product-image-container"]}>
        <img className = "product-image" src = {product.imageSrc} alt = {product.imageAlt} />
      </div>
      <div className = {styles["product-details"]}>
        <div className = {styles["product-price"]}>{product.price}</div>
        <div className = {styles["add-to-cart"]}></div>
      </div>
    </div>
  )

}