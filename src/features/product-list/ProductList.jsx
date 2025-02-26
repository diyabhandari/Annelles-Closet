//this file represents our products list page, so it should have the header too
import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import styles from "./productList.module.css"
import {
  increment,
  incrementAsync,
  selectCount,
  selectStatus,
} from "./productListSlice"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
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

  return (
      <div className = {styles["general-product-list"]}>
        <div className = {styles["list-name"]}>
          <p>New Arrivals</p>
        </div>
        <div className = {styles["list-viewer"]}>
          <div className = {styles["left-scroll"]}></div> 
          <div className = {styles["list-content"]}>
            {products.map((product) => (
              <ProductCard key = {product.id} product = {product}></ProductCard>
            ))}
            <div className = {styles["right-scroll"]}></div>
          </div>
        </div>

      </div>
  )
  {/*make this more similar to all products page in canva design, later, and add pagination */}
}
