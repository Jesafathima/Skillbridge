import {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";
import { UserIcon, EnvelopeIcon,LockClosedIcon } from "@heroicons/react/24/outline";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlelogin = async (e) =>{
       e.preventDefault();
       try{
        const response = await api.post("/auth/login", {email, password});
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);
        navigate("/");
       } catch( err){
        setError ("Invalid Email or Password.");
       }
    }
  return (
    <div className="flex justify-center items-center h-screen  bg-gradient-to-br  from-gray-900 to-orange-400">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 bg-white/20">
        <div className="flex flex-col items-center mb-4">
          <UserIcon className="flex w-12 h-12 text-gray-200" />
        </div>
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handlelogin} className="space-y-4">
          <div className="relative w-80">
            <EnvelopeIcon className="absolute left-2.5 top-3 w-5 h-5 text-gray-200" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 px-4 py-2 bg-transparent border-b border-gray-300 text-white focus:outline-none focus:ring focus:ring-blue-300" required/>
          </div>
         
          <div className="relative w-80">
            <LockClosedIcon className="absolute left-3 top-3 w-5 h-5 text-gray-200" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 px-4 py-2 bg-transparent border-b focus:outline-none focus:ring focus:ring-blue-300" required/>
          </div>
         
          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-600  transition"> Login</button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don't have an account? <a href="/register" className="text-white hover:underline">Register</a>
        </p>
      </div>
     </div> 
  );
};

export default Login;
