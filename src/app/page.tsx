"use client";

import LenovoScrollScene from "@/components/LenovoScrollScene";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <LenovoScrollScene />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
