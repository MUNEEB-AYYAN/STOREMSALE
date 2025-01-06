import { useDispatch, useSelector } from "react-redux"
import empcart from '../images/emptycart.png'
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import Modal from "../components/Modal"
import ChangeAddress from "../components/ChangeAddress"
import { removeFromCart , increaseQuantity, decreaseQuantity} from '../redux/CartSlice'
import { Navigate, useNavigate } from "react-router-dom"

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address, setAddress] = useState("Main Street , 0012")
    const [isModelOpen , setIsModelOpen ] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {cart.products.length > 0 ?   
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold ">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.products.map((product)=> {
                return (
                  
                  <div key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center  space-x-4">
                      <img src={product.image} alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                      />

                      <div className="flex-1 ml-4 ">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                      </div>

                    </div>
                      <div className="flex space-x-10 items-center">
                        <p>${product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button className="text-xl font-bold px-1.5 border-r"
                          onClick={()=> dispatch(decreaseQuantity(product.id))}
                          >-</button>
                          <p className="text-xl px-2">{product.quantity}</p>
                          <button className="text-xl px-1 border-1"
                          onClick={()=> dispatch(increaseQuantity(product.id))}
                          >+</button>
                        </div>
                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={()=> dispatch(removeFromCart(product.id))}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                  </div>
                  
                )
              })}
            </div>
            <div className="border-2 p-3 rounded-lg">
              <h3 className='font-semibold'>CART TOTAL</h3>
              <div className="mb-4 p-2 border-b-2">
                <span>Total Items: </span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className=" border-b-2 p-2">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to {" "}</p>  
                <span>{address}</span>
                <button className="text-blue-500 hover:underline mt-1 ml-2"
                onClick={()=>{setIsModelOpen(true)}}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price: </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
                <button className="w-full bg-red-600 text-white rounded "
                onClick={()=> navigate('/checkout')}
                >Proceed to Checkout</button>
            </div>
          </div>
          <Modal
          isModelOpen={isModelOpen}
          setIsModelOpen = {setIsModelOpen}
          >
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
          </Modal>
        </div>
        :<div className="flex justify-center ">
            <img src={empcart} alt=""  className="h-96"/>
        </div>
        }
    </div>
  )
}

export default Cart