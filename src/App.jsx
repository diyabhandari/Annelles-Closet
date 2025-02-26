
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { Homepage } from "./pages/Homepage"
const App = () => {
  return (
    <div className="App">
      <Homepage></Homepage>
    </div>
  )
}

export default App
