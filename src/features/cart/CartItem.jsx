import styles from "./cart.module.css"
import { RiDeleteBin6Fill } from "react-icons/ri";
export const CartItem = ({product}) => {
  return(
    <div className = {styles["cart-item-container"]}>
      <div className = {styles["cart-item-image"]}>
        <img className={styles["image"]} src = {product.imageSrc} alt = {product.imageAlt} />
      </div>
      <div className = {styles["cart-item-details"]}>
        <div className = {styles["item-name"]}>{product.name}</div>
        <div className = {styles["item-price"]}>{product.price}</div>
        <div className = {styles["item-availability"]}>In Stock{/*define a quantity field in products for this*/}</div>
      </div>
      <div className = {styles["dropdown"]}>
        <select className = {styles["select-dropdown"]}>
        <option value="1">1</option> {/*set this acc to that products available quantity later*/}
          <option value="2">2</option>
        </select>
      </div>
      <div className = {styles["cross-out"]}>
        <RiDeleteBin6Fill/>
      </div>
    </div>
  )
}