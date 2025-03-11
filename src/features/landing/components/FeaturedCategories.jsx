import styles from "../styles/categories.module.css"
import { CategoryCard } from "./CategoryCard"
export const FeaturedCategories = () => {
  const categories = [
    {
      id: "C1",
      name: 'Accessories',
      href: '#',
      imageSrc: 'https://i.postimg.cc/sXWtpSb5/category-accessories.png',
      imageAlt: "Hello kitty pair necklaces",
    },
    {
      id: "C2",
      name: 'Tops',
      href: '#',
      imageSrc: 'https://i.postimg.cc/jjDVSBXg/category-tops.png',
      imageAlt: "Baby blue full sleeves top",
    },
    {
      id: "C3",
      name: 'Dresses',
      href: '#',
      imageSrc: 'https://i.postimg.cc/prcXp47s/category-dresses.png',
      imageAlt: "Bold blue dress",
    },
    {
      id: "C4",
      name: 'Bottoms',
      href: '#',
      imageSrc: 'https://i.postimg.cc/y8Q4B7F3/category-bottoms.png',
      imageAlt: "Yellow denim skirt",
    }
  ]
  return(
    <div className={styles["category-list-container"]}>
      <div className={styles["category-list-title"]}>Explore Categories</div>
      <div className={styles["category-list"]}>
        {categories.map((category) => (
          <CategoryCard key = {category.id} category = {category}></CategoryCard>
        ))}
      </div>
    </div>
  )
}