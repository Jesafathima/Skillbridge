import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import CourseDetails from './pages/Coursedetails';
//import CreateCourse from './pages/CreateCourse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path ="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

/*<Route path="/create" element={<CreateCourse />} />
*/