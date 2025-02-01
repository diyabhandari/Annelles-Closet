import styles from "./productList.module.css"
export const ProductCard = ({product}) => {
  return(
    <div className = {styles["product-list-card"]}>
      <div className = {styles["product-name"]}>{product.name}</div>
      <div className = {styles["product-image-container"]}>
        <img className = {styles["product-image"]} src = {product.imageSrc} alt = {product.imageAlt} />
      </div>
      <div className = {styles["product-details"]}>
        <div className = {styles["product-price"]}>{product.price}</div>
        <div className = {styles["add-to-cart"]}>
        <span class="fa-stack">
          <i class="fa-solid fa-circle fa-stack-2x"></i>
          <i class="fa-solid fa-cart-shopping fa-stack-1x fa-inverse"></i>
        </span>               
        </div>
      </div>
    </div>
  )

}