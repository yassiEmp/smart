import Device from "@/components/Device";
import React from "react";
import porte from '@/public/clim.png'
import lampe from "@/public/lampe.png"
function IconBxHomeAlt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M5 22h14a2 2 0 002-2v-9a1 1 0 00-.29-.71l-8-8a1 1 0 00-1.41 0l-8 8A1 1 0 003 11v9a2 2 0 002 2zm5-2v-5h4v5zm-5-8.59l7-7 7 7V20h-3v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5H5z" />
    </svg>
  );
}

function IconSmartHomeLight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.034 6.5a5 5 0 0110 0v4a5 5 0 01-10 0v-4zm8 0v4a3 3 0 01-6 0v-4a3 3 0 016 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.034 16.5a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zM7.744 16.44a1 1 0 111.88.684l-1.368 3.759a1 1 0 11-1.88-.684l1.368-3.76zM14.974 15.842a1 1 0 00-.598 1.282l1.369 3.759a1 1 0 101.879-.684l-1.368-3.76a1 1 0 00-1.282-.597z"
      />
    </svg>
  );
}

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
