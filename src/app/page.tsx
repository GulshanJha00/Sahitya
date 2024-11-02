import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingCards from "../components/MovingCards"
export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection/>
      <Cards/>
      <WhyChooseUs/>
      <MovingCards/>

    </main>
  )
}