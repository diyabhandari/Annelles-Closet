import styles from "../styles/categories.module.css"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom"
export const CategoryCard = ({category}) => {
  return(
    <div className={styles["category-card-container"]}>
      <img className={styles["category-image"]} src = {category.imageSrc} alt = {category.imageAlt} />
      <Link to={category.href} className={styles["explore-button-container"]}>
        <div className={styles["category-name"]}>{category.name}</div>
        <FaArrowAltCircleRight />
      </Link>
    </div>
  )
}