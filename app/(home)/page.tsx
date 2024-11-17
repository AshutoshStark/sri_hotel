'use client'
import Cards from "./_components/Cards";
import FandQ from "./_components/FandQ";
import Hero from "./_components/Hero";
import HomeNav from "./_components/HomeNav";
import Influencers from "./_components/Influencers";
import Monetization from "./_components/Monetization";
import TravelPage from "./_components/TravelPage";

export default function Home() {

  return (
    <div className="py-12">
      <Hero/>
      <HomeNav/>
      <TravelPage/>
      <Monetization/>
      <Influencers/>
      {/* <Cards/> */}
      {/* <FandQ/> */}
    </div>
  );
}
