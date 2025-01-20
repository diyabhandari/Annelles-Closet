import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import styles from "./Counter.module.css"
import {
  increment,
  incrementAsync,
  selectCount,
  selectStatus,
} from "./counterSlice"

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  return (
    <div>
    </div>
  )
}
