import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";

function CardRek() {
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/weddingEvents/bg.jpeg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic text-white text-center font-light">
            Nomor Rekening
          </h1>
          <RevealWrapper duration={1500} origin="bottom">  
            <div className="mt-10">
             
              <div className="flex">
                
                <div className="w-full bg-white px-4 py-6 rounded-t-[1.25rem] rounded-bl-[1.25rem] rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <img
                src="/images/cardrek/bca.png"
                alt="akad"
                className="w-full h-42 object-cover  object-left"
              />
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] text-sm gap-1.5">
                  <FaCreditCard />
                   <strong> <span> 7151474318 - A.N Septian Renaldi Yusuf</span></strong>
                  </p>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] text-sm gap-1.5">
                  <FaCreditCard />
                   <strong> <span> 4210042011 - A.N Aulia Dwiyatni</span></strong>
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
          
        </div>
      </div>
    </section>
  );
}

export default CardRek;
