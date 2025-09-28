import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import CourseDetails from './pages/CourseDetails';
import CourseCreate from './pages/CourseCreate';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path ="/courses/:id" element={<CourseDetails />} />
        <Route path="/create-course" element={<CourseCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
