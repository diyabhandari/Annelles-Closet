import styles from "./checkout.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const Checkout = () => {
  const [shippingOption, setShippingOption] = useState("withinDelhi");

  useEffect(() => {
    document.body.classList.add(styles["checkout-body"]);

    return () => {
      document.body.classList.remove(styles["checkout-body"]);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Black Lace Tank",
      price: "$35",
      imageSrc: "/product-images/black-lace-tank.jpeg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      name: "Cropped Tank",
      price: "$20",
      imageSrc: "/product-images/cropped-tank.jpeg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      name: "White Lace Dress",
      price: "$35",
      imageSrc: "/product-images/white-lace-dress.jpeg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
  ];

  const orderTotal = "$90";

  const handleShippingChange = (event) => {
    setShippingOption(event.target.value);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["checkout-container"]}>
        {/*<div className={styles["checkout-title"]}>Checkout</div>*/}
        <div className={styles["checkout-details"]}>
          <div className={styles["personal-info"]}>
            <div className={styles["personal-info-title"]}>
              Personal Information
            </div>
            <div className={styles["info-note"]}>
              *Please go through our <Link to="/shipping-policy" className={styles["shipping-policy-link"]}>shipping policy</Link> before making any
              purchase. As a growing business, our methods differ from large-scale
              stores.
            </div>
            <div className={styles["form-fields"]}>
              <div className={styles["form-row"]}>
                <div className={styles["form-row-sequence"]}>
                  <div className={styles["form-field-and-title"]}>
                    <div className={styles["form-label"]}>First Name</div>
                    <input
                      className={[styles["form-input-names"]]}
                      type="text"
                    />
                  </div>
                  <div className={styles["form-field-and-title"]}>
                    <div className={styles["form-label"]}>Last Name</div>
                    <input className={styles["form-input-names"]} type="text" />
                  </div>  
                </div>  
              </div>
              <div className={styles["form-row"]}>
                <div className={styles["form-field-and-title"]}>
                  <div className={styles["form-label"]}>Email Address</div>
                  <input
                    className={styles["form-input-long"]}
                    type="email"
                  />
                </div> 
              </div>
              <div className={styles["form-row"]}>
                <div className={styles["form-field-and-title"]}>
                  <div className={styles["form-label"]}>Phone Number</div>
                  <input
                    className={styles["form-input-long"]}
                    type="tel"
                  />
                </div>
              </div>
              <div className={styles["form-row"]}>
                <div className={styles["form-field-and-title"]}>
                  <div className={styles["form-label"]}>Country</div>
                  <input
                    className={styles["form-input-long"]}
                    type="text"
                    value="India"
                    disabled
                  />
                </div>               
              </div>
              <div className={styles["form-row"]}>
                <div className={styles["form-field-and-title"]}>
                  <div className={styles["form-label"]}>Ship:</div>
                  <div className={styles["shipping-options"]}>
                    <label className={styles["shipping-option"]}>
                      <input
                        type="radio"
                        name="shipping"
                        value="withinDelhi"
                        checked={shippingOption === "withinDelhi"}
                        onChange={handleShippingChange}
                      />
                      Within Delhi
                    </label>
                    <label className={styles["shipping-option"]}>
                      <input
                        type="radio"
                        name="shipping"
                        value="outsideDelhi"
                        checked={shippingOption === "outsideDelhi"}
                        onChange={handleShippingChange}
                      />
                      Outside Delhi
                    </label>
                  </div>
                </div>          
              </div>
              {shippingOption === "withinDelhi" && (
                <div className={styles["form-row"]}>
                  <div className={styles["form-field-and-title"]}>
                    <div className={styles["form-label"]}>Nearest Metro Station</div>
                    <input className={styles["form-input-long"]} type="text" />
                  </div>
                </div>
              )}
              {shippingOption === "outsideDelhi" && (
                <>
                  <div className={styles["form-row"]}>
                    <div className={styles["form-field-and-title"]}>
                      <div className={styles["form-label"]}>State</div>
                      <input className={styles["form-input-long"]} type="text" />
                    </div>
                  </div>
                  <div className={styles["form-row"]}>
                    <div className={styles["form-field-and-title"]}>
                      <div className={styles["form-label"]}>Address</div>
                      <input className={styles["form-input-long"]} type="text" />
                    </div>
                  </div>
                  <div className={styles["form-row"]}>
                    <div className={styles["form-field-and-title"]}>
                      <div className={styles["form-label"]}>Pin Code</div>
                      <input className={styles["form-input-long"]} type="text" />
                    </div>
                  </div>
                </>       
              )}
            </div>
            <div className={styles["info-note"]}>
              Annelle will get in touch with you soon!
            </div>
          </div>
          <div>
            <div className={styles["cart-summary"]}>
              <Link to = "/cart"><div className={styles["cart-title"]}>Cart</div></Link>
              <div className={styles["cart-items-list"]}>
                {products.map((product) => (
                  <div key={product.id} className={styles["cart-item"]}>
                    <div className={styles["item-name"]}>{product.name}</div>
                    <div className={styles["item-price"]}>{product.price}</div>
                  </div>
                ))}
              </div>
              <div className={styles["order-total-field"]}>
                <div className={styles["order-total-name"]}>Order Total</div>
                <div className={styles["order-total-price"]}>{orderTotal}</div>
              </div>
              <button className={styles["proceed-button"]}>Proceed to Payment</button>
            </div>
            <div className={styles["continue"]}>
              <div className={styles["continue-or"]}>or</div>
              <Link to="/">
                <div className={styles["continue-link"]}>Continue shopping</div>
              </Link>
              <div>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};