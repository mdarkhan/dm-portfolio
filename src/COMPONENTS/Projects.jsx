import React from "react";


export default function Projects() {
const items = [
{ title: "CAPI Setup", desc: "Server-side tracking with GCP + GTM." },
{ title: "Facebook Ads", desc: "Full funnel scaling for eCommerce." },
{ title: "GA4 Fixing", desc: "Purchase mismatch issues solved." }
];


return (
<section className="max-w-6xl mx-auto px-4 py-16">
<h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
<div className="grid md:grid-cols-3 gap-6">
{items.map((p, i) => (
<div key={i} className="p-6 bg-white shadow rounded-lg">
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="mt-2 text-gray-600">{p.desc}</p>
</div>
))}
</div>
</section>
);
}