import React from "react";


export default function Contact() {
return (
<section id="contact" className="max-w-4xl mx-auto px-4 py-16">
<h2 className="text-3xl font-bold mb-6">Contact Me</h2>


<form action="https://formspree.io/f/xnqekgpn" method="POST" className="grid gap-4">
<input name="name" placeholder="Your Name" className="p-3 border rounded" required />
<input name="email" type="email" placeholder="Your Email" className="p-3 border rounded" required />
<textarea name="message" placeholder="Message" className="p-3 border rounded h-32" required></textarea>


<button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
Send Message
</button>
</form>
</section>
);
}