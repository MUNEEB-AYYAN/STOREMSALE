import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"

const Shop = () => {
    const products = useSelector(state => state.product)
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                {products.products.map(((product)=>{
                        return (
                            <>                
                                <ProductCard product={product}/>
                            </>
                        )
                    }))}
            </div>
        </div>
  )
}

export default Shop