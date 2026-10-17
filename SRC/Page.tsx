"use client";
import { useState } from "react";
export default function NtumbaEduc(){
  const courses = [
    {title:"Intelligence Artificielle", desc:"Machine learning, deep learning", level:"Débutant à Avancé", dur:"12 semaines"},
    {title:"Génie Informatique", desc:"Architecture, réseaux, sécurité", level:"Débutant à Avancé", dur:"16 semaines"},
    {title:"Python Data Science", desc:"Pandas, NumPy, visualisation", level:"Intermédiaire", dur:"14 semaines"},
    {title:"Web Full-Stack", desc:"React, Node.js, DB", level:"Intermédiaire", dur:"14 semaines"},
    {title:"Cybersécurité", desc:"Ethical hacking", level:"Avancé", dur:"10 semaines"},
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 shadow">🎓 Ntumba Éduc - 10,000+ apprenants - 4.9/5</header>
      <section className="p-8 bg-white"><h1 className="text-4xl font-bold">Apprenez, Grandissez et Réussissez</h1></section>
      <section className="grid md:grid-cols-2 gap-4 p-6">{courses.map(c=><div className="bg-white p-4 rounded-xl border"><h3 className="font-bold">{c.title}</h3><p className="text-xs">{c.desc}</p></div>)}</section>
      <footer className="bg-emerald-900 text-white p-6 text-xs text-center">© Ntumba Éduc - Kinshasa RDC - +243 810 649 049</footer>
    </div>
  )
}
