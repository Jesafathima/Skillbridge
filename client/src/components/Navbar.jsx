const Navbar = () => {
  const role = localStorage.getItem("role");
  return (
    <nav /*className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50"*/>
      <h1 /*</nav>className="text-2xl font-bold text-blue-600"*/>SkillBridge</h1>
      <div /* className="space-x-4" */>
        <a href="/" /* className="hover:text-blue-500" */> Home</a>
        <a href="#courses" /* className="hover:text-blue-500" */> Courses</a>
        {role === "creator" && <a href="/create-course"> CreateCourse</a>}
        <a href="/login" /* className="hover:text-blue-500" */> Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
