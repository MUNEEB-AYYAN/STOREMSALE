import { Link } from "react-router-dom"
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";



const Navbar = () => {
    const products = useSelector(state => state.cart.products)
  return (
    <nav className="bg-white md-shadow">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center ">
            <div className="text-lg font-bold">
                <Link to='/'>E-Shop</Link>
            </div>
                            <div className="relative flex-1 mx-4">
                <form className="form relative">
                <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                    
                </button>
                <input
                    className="input rounded-full w-9/12 px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                    placeholder="Search..."
                    required=""
                    type="text"
                />
                <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                    
                </button>
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Link to='/cart' className="relative">
                    <FaShoppingCart className="text-lg" />
                    {products.length > 0 && (
                        <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                            {products.length}
                        </span>
                    )}
                </Link>

                <Link to='/login'>
                <button className="ml-2 hidden md:block ">
                    Login | Register
                </button>
                <button className="block md:hidden">
                    <FaUser />
                </button>
                </Link>
            </div>
        </div>

        <div className="flex justify-center items-center space-x-16 py-4 text-sm font-bold">
            <Link to='/' className="hover:underline">
                Home
            </Link>
            <Link to='/Shop' className="hover:underline">
                Shop
            </Link>
            <Link to='/contact' className="hover:underline">
                Contact
            </Link>
            <Link to='/about' className="hover:underline">
                About Us
            </Link>
        </div>
    </nav>
  )
}

export default Navbar