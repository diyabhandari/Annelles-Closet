import styles from "./cart.module.css"
import { CartItem } from "./CartItem"
import { useEffect } from "react";
export const Cart = () => {

  useEffect(() => {
    document.body.classList.add(styles["cart-body"]);

    return () => {
      document.body.classList.remove(styles["cart-body"]);
    };
  }, []);

  const products = [   
    {
      id: 1,
      name: 'Black Lace Tank',
      href: '#',
      imageSrc: '/product-images/black-lace-tank.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Cropped Tank',
      href: '#',
      imageSrc: '/product-images/cropped-tank.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$20',
      color: 'Black',
    },
    {
      id: 3,
      name: 'White Lace Dress',
      href: '#',
      imageSrc: '/product-images/white-lace-dress.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'White',
    },
    // More products...
  ]
  return(
    <div className={styles["cart-container"]}>
      <div className={styles["my-cart-title"]}>My Cart</div>
        <div className={styles["my-cart-details"]}>
          <div className={styles["cart-items-list"]}>
            {products.map((product) => (
              <CartItem key = {product.id} product = {product}></CartItem>
            ))}
          </div>
          <div className={styles["order-summary"]}>
            <div className={styles["order-summary-title"]}>Order Summary</div>
            <div className={styles["order-summary-field"]}>
              <div className={styles["order-summary-field-name"]}>Subtotal</div>
              <div className={styles["order-summary-field-price"]}>$70</div>
            </div>
            <div className={styles["order-summary-field"]}>
              <div className={styles["order-summary-field-name"]}>Shipping Estimate</div>
              <div className={styles["order-summary-field-price"]}>$5</div>
            </div>
            <div className={styles["order-total-field"]}>
              <div className={styles["order-total-name"]}>Order Total</div>
              <div className={styles["order-total-price"]}>$75</div>
            </div>
            <button className={styles["checkout"]}>checkout</button>
          </div>
          
        </div>

    </div>
  )
}