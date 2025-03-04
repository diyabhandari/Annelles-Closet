import { Headline } from "../features/landing/components/Headline"
import { Navbar } from "../features/navbar/Navbar"
import { ProductList } from "../features/product-list/ProductList"
export const Homepage = () => {
  return(
    <div>
      <Navbar>
        <Headline></Headline>
        <ProductList></ProductList> {/*passed as child*/}
      </Navbar>
    </div>

  )
}