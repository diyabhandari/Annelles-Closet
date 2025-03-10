import styles from "./navbar.module.css"
import { Link } from "react-router-dom"
//referred to tailwind stacked layout as an example for this 

//Home is opened when logo is clicked, its the default page that a user sees on opening the site
//  { name: 'Home', href: '#', current: true },
const navigation = [
  { name: 'Login', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
  { name: 'Reviews', href: '#', current: false },
]


export const Navbar = ({children}) => { //whatever component we pass as children, navbar will be applied to that
  return (
    <div>
      <div className = {styles["navbar"]}>
        <div className = {styles["logo"]}>
          <div className = {styles["logo-image-container"]}>
            <img href = "/" src = "./image.png" className = {styles["logo-image"]} />
          </div>
        </div>
        <div className = {styles["links"]}>
          {navigation.map((item) => 
            <div className = {styles["link-item"]}>
              <a 
                href = {item.href} 
                aria-current = {item.current ? 'page':undefined}
                className = {styles["link"]}
              >
                {item.name}
              </a>
            </div>
          )}
        </div>
        <div className = {styles["search-bar"]}>
          <div className = {styles["search-icon"]}>
            <i class="fas fa-search fa-s"></i>
          </div>
          <div className = {styles["search-input"]}></div>
        </div>
        <Link to="/cart">
          <div className= {styles["cart-icon"]}>
            <span class="fa-stack">
              <i class="fa-solid fa-circle fa-stack-2x" className={styles["cart-bg"]}></i>
              <i class="fa-solid fa-cart-shopping fa-stack-1x fa-inverse" className={styles["cart"]}></i>
            </span>
            <span className={styles["cart-badge"]}>3</span>
          </div>
        </Link> 
      </div>
      <main>
          <div>
            {children}
          </div>
      </main>
    </div>
    
  )
}

