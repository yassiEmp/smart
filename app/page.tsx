import Device from "@/components/Device";
import React from "react";
import porte from '@/public/clim.png'
import lampe from "@/public/lampe.png"
import IconBxHomeAlt from "@/components/IconBxHomeAlt";
import IconSmartHomeLight from "@/components/IconSmartHomeLight";


const Home = () => {
  return (
    <section className="relative w-[320px] h-[658px] bg-[#202a36] text-white antialiased flex flex-col justify-center items-center p-0 overflow-hidden ">
      <section className="w-[95%] h-[95%]  br relative top-0 left-0 flex flex-col gap-4">
        <section className="w-full h-[167px] bg-[#29384b] rounded-3xl flex flex-col justify-around items-center">
          <div className="w-full  br h-[100px] flex justify-between p-4 ">
            <div>
              <h2 className="text-xl capitalize">bienvenue</h2>
              <p className="text-nowrap text-[#9e9e9e]">mr arnaud</p>
            </div>
            <div className=" br w-2/4 h-fit ">
              <div className=" br h-15 flex ">
                <p className="text-2xl">
                  <span className="text-[#fff023]">23°</span>
                </p>
                <img
                  src="nuage2.png"
                  alt="une image de  nuage "
                  className="w-[60px] h-12 float-right object-cover"
                />
              </div>
              <p className="text-nowrap max-w-full text-[#9e9e9e]">
                le soleil et nuageux
              </p>
            </div>
          </div>
          <div className="flex justify-around  br w-full p-3 shad relative ">
            <div className=" br">
              <p className="font-medium text-xl ">27°C</p>
              <p className="text-[#9e9e9e] text-sm capitalize">temperature</p>
            </div>
            <div className=" br">
              <p className="font-medium text-xl text-center">4</p>
              <p className="text-[#9e9e9e] text-sm capitalize antialiased">
                appareil
              </p>
            </div>
            <div className=" br">
              <p className="font-medium text-xl">16.8 kwh</p>
              <p className="text-[#9e9e9e] text-sm capitalize text-left ">
                usage
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 h-2/3">
          <div className="flex justify-between items-end ">
            <p className="text-2xl">Appareils</p>
            <p className="text-[#f54234] font-semibold underline antialiased">
              Voir
            </p>
          </div>
          <article className="h-[340px] overflow-x-auto flex flex-wrap gap-2 p-1">
            <Device imag={porte} name={"clim 2"}/>
            <Device imag={lampe} name={"lampe"}/>
            <Device imag={lampe} name={"lampe"}/>
            <Device imag={lampe} name={"lampe"}/>
            <div className="absolute w-full h-24 bottom-0"></div>
          </article>
        </section>
        <nav className="w-ful h-20 rounded-full bg-[#607d8b] flex justify-around items-center">
          <div className="flex flex-col items-center text-[#d1d1d1]">
            <IconBxHomeAlt />
            <p className="text-2xs font-bold text-[#131313]">Home</p>
          </div>
          <div className="flex flex-col items-center text-gray-900">
            <IconSmartHomeLight />
            <p className="text-2xs font-bold">Appareils</p>
          </div>
          {/* <p>compte</p> */}
        </nav>
      </section>
    </section>
  );
};

export default Home;
