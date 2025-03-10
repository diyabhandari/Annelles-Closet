import styles from "./productList.module.css"
import { BsHandbagFill } from "react-icons/bs";

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
          <BsHandbagFill className= {styles["cart"]}/>            
        </div>
      </div>
    </div>
  )

}