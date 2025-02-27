import styles from "../styles/Login.module.css"
import { Link } from "react-router-dom"

export const Login = () =>{
  return(
    <div className = {styles["container"]}>
      <div className = {styles["logo"]}>
      <img href = "/" src = "./logo-dark.png" className = {styles["logo-image"]} />
      </div>
      <div className = {styles["page-title"]}>sign in to your account</div>
      <div className = {styles["inputs"]}>
        <div className = {styles["email"]}>
          <div className = {styles["field-title"]}>email address</div>
          <input type="email" className={styles["input-box"]} />
        </div>
        <div className = {styles["password"]}>
          <div className = {styles["password-field-titles"]}>
            <div className = {styles["field-title"]}>password</div>
            <div className = {styles["forgot-password"]}>forgot password ?</div>
          </div>
          <input type="password" className={styles["input-box"]} required />
        </div>
      </div>
      <button className = {styles["sign-in-button"]}>sign in</button>
      <div className = {styles["CTA"]}>
        <p >not a member ?</p>
        <p className = {styles["red-text"]}>
          <Link to = "/signup">create an account</Link>
        </p>
      </div>
    </div>
  )
}