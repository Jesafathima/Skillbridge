import {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";

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
     <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handlelogin} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required/>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"> Login</button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
     </div> 
  );
};

export default Login;
    