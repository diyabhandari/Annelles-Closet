import styles from "../styles/Signup.module.css"
import { Link } from "react-router-dom"
export const Signup = () =>{
  return(
    <div className = {styles["container"]}>
      <div className = {styles["logo"]}>
      <img href = "/" src = "./logo-dark.png" className = {styles["logo-image"]} />
      </div>
      <div className = {styles["page-title"]}>create your account</div>
      <div className = {styles["inputs"]}>
        <div className = {styles["email"]}>
          <div className = {styles["field-title"]}>email address</div>
          <input type="email" className={styles["input-box"]} />
        </div>
        <div className = {styles["password"]}>
          <div className = {styles["password-field-titles"]}>
            <div className = {styles["field-title"]}>password</div>
          </div>
          <input type="password" className={styles["input-box"]} />
        </div>
        <div className = {styles["password"]}>
          <div className = {styles["password-field-titles"]}>
            <div className = {styles["field-title"]}>confirm password</div>
          </div>
          <input type="confirm-password" className={styles["input-box"]} required />
        </div>
      </div>
      <button className = {styles["sign-in-button"]}>sign up</button>
      {/*add email verification*/}
      <div className = {styles["CTA"]}>
        <p >already a member ?</p>
        <p className = {styles["red-text"]}>
          <Link to = "/login">sign in</Link>
        </p>
      </div>
    </div>
  )
}