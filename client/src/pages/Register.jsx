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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="name" placeholder="Full Name" value={name} onChange ={(e) =>setUsername(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required/>
                    <input type="email" placeholder="Email" value ={email} onChange = {(e)=> setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required/>
                    <input type="password" placeholder="Password" value= {password} onChange ={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required/>
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"> Register</button>
                </form>

                <p className="mt-4 text-sm text-center"> Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
            </div>
        </div>
    )
}

export default Register;