import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<nav className="w-full bg-white shadow-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
<Link to="/" className="text-xl font-bold text-blue-600">Arafat</Link>


<button
className="md:hidden"
onClick={() => setOpen(!open)}
>
☰
</button>


<div className={`md:flex gap-6 font-medium ${open ? "block" : "hidden"}`}>
<Link to="/" className="hover:text-blue-600">Home</Link>
<Link to="/projects" className="hover:text-blue-600">Projects</Link>
<Link to="/blog" className="hover:text-blue-600">Blog</Link>
<Link to="/contact" className="hover:text-blue-600">Contact</Link>
</div>
</div>
</nav>
);
}