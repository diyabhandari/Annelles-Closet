
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { Homepage } from "./pages/Homepage"
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage"
import { CartPage } from "./pages/CartPage"
import { CheckoutPage } from "./pages/CheckoutPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Headline } from "./features/landing/components/Headline"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", /*whichever path to go to */
      element: <Homepage></Homepage>, /*what element is loaded on that path*/
    },
    {
      path: "/login", 
      element: <LoginPage></LoginPage>, 
    },
    
    {
      path: "/signup", 
      element: <SignupPage></SignupPage>, 
    },
    {
      path: "/cart", 
      element: <CartPage></CartPage>, 
    },
    {
      path: "/checkout", 
      element: <CheckoutPage></CheckoutPage>, 
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
