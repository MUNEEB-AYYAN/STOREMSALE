import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    let navigate = useNavigate()
    const evntChange = () => {
        
        navigate('/login')
    }

    const  eventSubmit =(e) => [
        e.preventDefault()
    ]
  return (
    <div className="w-full my-4">
        <h2 className="text-2xl font-bold text-center  my-4">Sign Up</h2>
        <form action=""  onSubmit={eventSubmit}
        className="flex flex-col justify-center items-center gap-4">
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="Name" className="w-full px-8 py-2 border "
                placeholder="Enter Your Email"/>
            </div>

            <div>
                <label className="block text-gray-700">Password</label>
                <input type="password"  className="w-full px-8 py-2 border "
                placeholder="Password"
                />
            </div>

            <div className="mb-4">
                
                <button type="submit"  onClick={evntChange}
                 className="w-full bg-blue-600 text-white px-5 rounded py-2">
                    Sign Up </button>
            </div>
        </form>
        <div className="text-center">
            <span className="text-gray-700">Already have an account?</span>
            <Link to='/login'>
            <button className="text-red-800">Login</button>
            </Link>
        </div>
    </div>
  )
}

export default Register