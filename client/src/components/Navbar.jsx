const Navbar = () => {
  const role = localStorage.getItem("role");
  return (
    <nav className="bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50 ">
      <h1 className="text-2xl font-bold text-orange-600">SkillBridge</h1>
      <div className="space-x-10  text-white ">
        <a href="/" className=" inline-block hover:scale-125 transition-transform duration-300"> Home</a>
        <a href="#courses" className="inline-block hover:scale-125 transition-transform duration-300"> Courses</a>
        {role === "creator" && <a href="/create-course" className="inline-block hover:scale-125 transition-transform duration-300"> Create Course</a>}
        <a href="#footer" className="inline-block hover:scale-125 transition-transform duration-300"> Contact Us</a>
        <a href="/login" className="inline-block hover:scale-125 transition-transform duration-300"> Login</a>
      </div>
    </nav>
  );
};
export default Navbar;
