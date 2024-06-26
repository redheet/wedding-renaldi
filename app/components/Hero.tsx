"use client";

import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { RevealWrapper } from "next-reveal";

function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/backsound-2.mp3", {
    volume: 0.25,
  });

  return (
    <section id="hero">
      <div className="min-h-screen bg-[url('/images/hero/bg.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
          <div>
            <p className="font-extralight text-[0.75rem]">The Wedding of</p>
            <h1 className="text-4xl font-light mt-2">Aulia & Renaldi</h1>
            <p className="font-extralight text-[0.8rem] mt-4">
              Saturday, 03 Agustus 2024
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.8rem]">Depok Town Center</p>
            <p className="text-[0.8rem]">
              Jl. Mampang indah 2 No.11, Depok, Sleman, DKI
            </p>
            <RevealWrapper duration={4000} origin="bottom">
              <a
                href="#countdown"
                onClick={() => {
                  setCurrentOverflow("auto");
                  play();
                }}
                className="font-bold text-sm bg-[#ffffff36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
              >
                <RxEnvelopeOpen />
                <span>Buka Undangan</span>
              </a>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
