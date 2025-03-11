import styles from "../styles/categories.module.css"
import { FaArrowAltCircleRight } from "react-icons/fa";

export const CategoryCard = ({category}) => {
  return(
    <div className={styles["category-card-container"]}>
      <img className={styles["category-image"]} src = {category.imageSrc} alt = {category.imageAlt} />
      <div className={styles["explore-button-container"]}>
        <div className={styles["category-name"]}>{category.name}</div>
        <FaArrowAltCircleRight />
      </div>
    </div>
  )
}