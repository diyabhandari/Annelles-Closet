import styles from "../styles/Login.module.css"
export const Login = () =>{
  return(
    <div className = {styles["container"]}>
      <div className = {styles["logo"]}></div>
      <div className = {styles["page-title"]}></div>
      <div className = {styles["inputs"]}>
        <div className = {styles["email"]}>
          <div className = {styles["field-title"]}>email address</div>
          <div className = {styles["email-input-box input-box"]}></div>
        </div>
        <div className = {styles["password"]}>
          <div className = {styles["password-field-title field-title"]}>
            <div>password</div>
            <div className = {styles["forgot-password"]}>forgot password ?</div>
          </div>
          <div className = {styles["password-input-box input-box"]}></div>
        </div>
      </div>
      <div className = {styles["sign-in-button"]}>sign in</div>
      <div className = {styles["CTA"]}>
        <p>not a member ?</p>
        <p>create an account</p>
      </div>
    </div>
  )
}