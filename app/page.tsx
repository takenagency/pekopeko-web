import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroAbout from "@/components/HeroAbout";
import DishBar from "@/components/DishBar";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Delivery from "@/components/Delivery";
import InstagramSection from "@/components/InstagramSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DishBar />
        <HeroAbout />
        <Menu />
        <Location />
        <Delivery />
        <InstagramSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
