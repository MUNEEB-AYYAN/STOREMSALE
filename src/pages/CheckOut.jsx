import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

const CheckOut = () => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)

    const [paymentMethod, setPaymentMethod] = useState("cod")
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        
          <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className=" border p-2 mb-6">
                <div className="flex items-center justify-between mb-2"
                onClick={()=> setBillingToggle(!billingToggle)}
                >
                    <h3>Billing Information</h3>
                   {billingToggle ? <FaAngleDown /> : <FaAngleUp />} 
                </div>

                <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                    <div>
                        <label 
                        className="block text-gray-700">Name</label>
                        <input 
                        type="text" 
                        name='name'
                        placeholder="Enter Your Name"
                        className="w-full px-3 py-2 border"
                        />
                    </div>
                    <div>
                        <label 
                        className="block text-gray-700"
                        >Email</label>
                        <input 
                        type="email" 
                        name='email'
                        placeholder="Enter Your Email"
                        className="w-full px-3 py-2 border"
                        />
                    </div>
                    <div>
                        <label 
                        className="block text-gray-700"
                        >Phone</label>
                        <input 
                        type="text" 
                        name='number    '
                        placeholder="Enter Your Number"
                        className="w-full px-3 py-2 border"
                        />
                    </div>
                </div>

              </div>
            </div>

            <div className="border-2 p-3 rounded-lg">           
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className=" border p-2 mb-6">
                <div className="flex items-center justify-between mb-2"
                onClick={()=> setShippingToggle(!shippingToggle)}
                >
                    <h3>    Shipping Information</h3> 
                   {shippingToggle ? <FaAngleDown /> : <FaAngleUp />} 
                </div>

                <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                    <div>
                        <label 
                        className="block text-gray-700">Address</label>
                        <input 
                        type="text" 
                        name='name'
                        placeholder="Enter Your Address"    
                        className="w-full px-3 py-2 border"
                        />
                    </div>
                    <div>
                        <label 
                        className="block text-gray-700"
                        >City</label>
                        <input 
                        type="text" 
                        name='name'
                        placeholder="Enter Your City"
                        className="w-full px-3 py-2 border"
                        />
                    </div>
                    <div>
                        <label 
                        className="block text-gray-700"
                        >ZIP code</label>
                        <input 
                        type="text" 
                        name='code    '
                        placeholder="Enter Your ZIP code"
                        className="w-full px-3 py-2 border"
                        />
                    </div>
                </div>
              </div>

              

            </div>

          </div>

            {/* Payment Method */}
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className=" border p-2 mb-6">
                <div className="flex items-center justify-between mb-2"
                onClick={()=> setPaymentToggle(!paymentToggle)}
                >
                    <h3>Payment Method</h3> 
                   {paymentToggle ? <FaAngleDown /> : <FaAngleUp />} 
                </div>

                <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                        
                    <div className="flex items-center mb-2">
                        <input 
                        type="radio" 
                        name='payment'
                        checked={paymentMethod === 'cod'}
                        onChange={()=>setPaymentMethod('cod')}
                        />
                        <label
                        className="block text-gray-700 ml-2"
                        >  Cash On Delivery</label>
                    </div>
                        
                    <div className="flex items-center mb-2">
                        <input 
                        type="radio" 
                        name='payment'
                        checked={paymentMethod === 'dc'}
                        onChange={()=>setPaymentMethod('dc')}
                        />
                        <label
                        className="block text-gray-700 ml-2"
                        >  Debit Card</label>
                    </div>



                </div>

              </div>
            </div>

            </div>
         
          
      
    </div>
  )
}

export default CheckOut