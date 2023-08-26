import Image from "next/image";
import Button from "@/components/button";
import Navbar from "@/components/navbar";
import Cards from "@/components/cards";
import About from "@/components/about";
import Events from "@/components/events";
import Testimonial from "@/components/testimonial";
import Features from "@/components/features";
import Qualities from "@/components/qualities";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Faq from "@/components/faq";

export default function Home() {
  return <main className="w-[100%]">
    <Navbar/>
    <Hero/>
    <Cards/>
    <About/>
    <Faq/>
    
    <Events/>
    <Testimonial/>
    <Features/>
    <Qualities/>
    <Footer/>
    
    
    
  </main>;
}
