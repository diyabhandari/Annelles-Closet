
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { ProductList } from "./features/product-list/ProductList";
import { Navbar } from "./features/navbar/Navbar";
const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList></ProductList>
    </div>
  )
}

export default App
