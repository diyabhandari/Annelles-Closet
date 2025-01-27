import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import styles from "./ProductList.module.css"
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
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
  ]

  return (
      <div className = "general-product-list">
        <div className = "list-name">New Arrivals</div>
        <div className = "list-viewer">
          <div className = "left-scroll"></div> 
          <div className = "list-content">
            {products.map((product) => (
              <ProductCard key = {product.id} product = {product}></ProductCard>
            ))}
            <div className = "right-scroll"></div>
          </div>
        </div>

      </div>
  )
}
