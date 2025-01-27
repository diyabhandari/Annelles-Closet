import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { ProductList } from "./features/product-list/ProductList";
const App = () => {
  return (
    <div className="App">
      <Quotes></Quotes>
    </div>
  )
}

export default App
