import { useEffect } from "react"
import InfoSection from "../components/InfoSection"
import CategorySection from "../components/CategorySection"
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "../redux/ProductSlice"
import { Categories, mockData } from "../assets/MockData"
import ProductCard from "../components/ProductCard"



const Home = () => {

    const dispatch= useDispatch()
        const products =  useSelector(state => state.product)
        useEffect(()=>{
            dispatch(setProducts(mockData))
        });

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 py-4">
        <div className="container mx-auto flex flex-col md:flex-row space-x-2">
            <div className="w-full md:w-3/12">
                
                    <div className="bg-red-600 text-white text-x5 font-bold px-2 py-2m.5 ">SHOP BY CATEGORIES</div>
                        <ul className="space-y-4 bg-gray-100 p-3 border">
                        {
                            Categories.map((category,ind)=>{
                                return (
                                    <>
                                        <li key={ind} className="flex items-center text-sm font-medium">
                                            <div className="w-2 h-2 border-red-500 rounded-full mr-2"></div>
                                                {category}  
                                        </li>
                                    </>
                                    
                                )})}
                        </ul>
                    </div>
                
                
                <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                    <img src="https://watermark.lovepik.com/photo/40027/7318.jpg_wh1200.jpg"
                    alt="Image1"
                    className="h-full w-full"
                    />
                    <div className="absolute top-52 left-16">
                        <p className="text-slate-900 p-1 text-xl font-bold mb-4">Code With Muneeb</p>
                        <h2 className="text-3xl font-bold">Welcome to E-SHOP</h2>
                        <p className="text-xl mt-2.5 font-bold text-gray-800">Million+ PRODUCTS</p>
                        <button className="bg-red-600 px-8 py-1 text-white mt-4 hover:bg-red-700
                        transform transition-transform duration-300 hover:scale-105 "
                        >SHOP NOW</button>
                    </div>
                </div>
        </div>
        <InfoSection />
        <CategorySection />

        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  ">
                {products.products.slice(0,4).map(((product)=>{
                        return (
                            <>      
                                <ProductCard product={product}/>                               
                            </>
                        )
                    }))}
            </div>
        </div>
    </div>
    
  )
}

export default Home