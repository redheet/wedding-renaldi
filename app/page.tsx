"use client";

import { useEffect, useState } from "react";
import Countdown from "./components/countdown/Countdown";
import ArRum from "./components/surat/ArRum";
import Hero from "./components/hero/Hero";
import Profile from "./components/Profile/Profile";
import WeddingEvents from "./components/weddingevent/WeddingEvents";
import Reservation from "./components/reservation/Reservation";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import CardRek from "./components/card/CardRek";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = currentOverflow;
  }, [currentOverflow]);

  return (
    <div className="max-w-[28.125rem] mx-auto">
      <RevealWrapper duration={1500}>
        <Hero setCurrentOverflow={setCurrentOverflow} />
      </RevealWrapper>
      <Countdown />
      <ArRum />
      <Profile />
      <WeddingEvents />
      {/* <Reservation /> */}
      <CardRek />
      <Gallery />
      <Footer />
    </div>
  );
}
