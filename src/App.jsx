import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-gray-50">
<Navbar />
<Routes>
<Route
path="/"
element={
<>
<Hero />
<Projects />
<Blog />
<Contact />
</>
}
/>
<Route path="/projects" element={<Projects />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</div>
);
}