import { Link, useNavigate } from "react-router-dom"


const Login = () => {

    let navigate = useNavigate()
    const evntChange = () => {
        
        navigate('/')
    }

    const  eventSubmit =(e) => [
        e.preventDefault()
    ]

  return (
    <div className=" w-full my-4 flex flex-col justify-center items-center h-10/12 ">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form action="" onSubmit={eventSubmit} className="gap-4 ">
            <div className="mb-4">
                <label className="block text-gray-700 ">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded"
                placeholder="Enter Your Email"/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password"  className="w-full px-3 py-2 border rounded my-2"
                placeholder="Password"
                />
            </div>

            <div className="mb-4 flex items-center justify-between">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox"/>
                    <span className="mx-2 text-gray-700">Remember Me</span>
                </label>    
                    <a className="text-red-800 ml-2" >Forgot Password</a>  
            </div>
            <div className="mb-4">
                <button type="submit"
                onClick={evntChange}
                className="w-4/12 ml-20 bg-blue-600 text-white px-5 rounded py-2">
                    Login </button>    
            </div>
        </form>
        <div className="text-center">
            <span className="text-gray-700">Dont have an account?</span>
            
        <Link    to='/sign'>
            <button className="text-red-800">Sign Up</button>
        </Link>
        </div>
    </div>
    
  )
}

export default Login