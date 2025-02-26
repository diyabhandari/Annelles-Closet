
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { Homepage } from "./pages/Homepage"
import { LoginPage } from "./pages/LoginPage"
const App = () => {
  return (
    <div className="App">
      <LoginPage></LoginPage>
    </div>
  )
}

export default App
