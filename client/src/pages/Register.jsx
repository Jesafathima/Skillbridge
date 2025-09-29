import {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";

const Register = () => {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate =useNavigate();

    const handleRegister =async (e) => {
        e.preventDefault();
        try{
          await api.post("/auth/register",{name,email,password});
          navigate("/login");  
        } catch(err){
            setError("Registration failed. Please try again.");
        }
    };

    return(
        <div className="flex justify-center items-center h-screen  bg-gradient-to-br  from-gray-900 to-orange-400">
            <div className="bg-gray-300 p-8 rounded-xl shadow-lg w-98">
                <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-br  from-gray-900 to-orange-400 bg-clip-text text-transparent">Registration Form</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleRegister} >
                    <lable className="text-gray-800">Full Name </lable>
                    <input type="name"  value={name} onChange ={(e) =>setUsername(e.target.value)} className="w-full mb-5 border-b-2 bg-gray-300 border-gray-500 focus:outline-none focus:ring focus:ring-blue-300" required/>
                    <lable className="text-gray-800">Email </lable>
                    <input type="email" value ={email} onChange = {(e)=> setEmail(e.target.value)} className="w-full mb-5 border-b-2 bg-gray-300 border-gray-500 focus:outline-none focus:ring focus:ring-blue-300" required/>
                    <lable className="text-gray-800">Password</lable>
                    <input type="password"  value= {password} onChange ={(e) => setPassword(e.target.value)} className="w-full mb-10 border-b-2 bg-gray-300 border-gray-500 focus:outline-none focus:ring focus:ring-blue-300" required/>
                    <button type="submit" className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-500 transition"> Register</button>
                </form>

                <p className="mt-4 text-sm text-center"> Already have an account? <a href="/login" className="text-orange-900 hover:underline">Login</a></p>
            </div>
        </div>
    )
}

export default Register;