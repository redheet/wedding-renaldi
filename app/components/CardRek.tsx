import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";

function CardRek() {
  return (
    <section id="wedding-events">
      {/* <div classNameName="bg-[url('/images/weddingEvents/bg.jpeg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div classNameName="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div classNameName="z-10 relative">
          <h1 classNameName="text-xl italic text-white text-center font-light">
            Wedding Gift
          </h1>
          <RevealWrapper duration={1500} origin="bottom">
            <div classNameName="mt-10">
              <div classNameName="flex">
                <div classNameName="w-full bg-white px-4 py-6 rounded-t-[1.25rem] rounded-bl-[1.25rem] rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <img
                    src="/images/cardrek/bca.png"
                    alt="akad"
                    classNameName="w-full h-42 object-cover  object-left"
                  />
                  <hr classNameName="border border-[#5a5a5a80] w-full" />
                  <p classNameName="flex items-center text-[#5a5a5a] text-sm gap-1.5">
                    <FaCreditCard />
                    <strong>
                      {" "}
                      <span> 7151474318 - A.N Septian Renaldi Yusuf</span>
                    </strong>
                  </p>
                  <hr classNameName="border border-[#5a5a5a80] w-full" />
                  <p classNameName="flex items-center text-[#5a5a5a] text-sm gap-1.5">
                    <FaCreditCard />
                    <strong>
                      {" "}
                      <span> 4210042011 - A.N Aulia Dwiyatni</span>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div> */}

      <div className="bg-white min-h-screen flex justify-center items-center">
        <div className="space-y-16">
          <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
            />

            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name </p>
                  <p className="font-medium tracking-widest">
                    Septian Renaldi Yusuf
                  </p>
                </div>
                <img className="w-16 h-8" src="/images/cardrek/bca-logo.png" />
              </div>
              <br />
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">7151474318</p>
              </div>
            </div>
          </div>

          <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
            />

            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name </p>
                  <p className="font-medium tracking-widest">Aulia Dwiyatni</p>
                </div>
                <img className="w-16 h-8" src="/images/cardrek/bca-logo.png" />
              </div>
              <br />
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">4210042011</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardRek;
