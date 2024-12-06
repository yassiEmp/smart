"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
const Device = (props: { imag: StaticImport; name: string }) => {
  const [on, setOn] = useState(true);
  async function handleRequest(device: string): Promise<void> {
    const link = "http://192.168.1.1/";
    const result = await fetch(link + device, { cache: "no-cache" });
    console.log(result)
    return ;
  }
  return (
    <div className="relative overflow-hidden w-[140px] bg-[#ffecca] h-52 rounded-xl flex flex-col justify-around shado">
      <div className="top-0 max-h-[70%] z-10">
        <Image src={props.imag} alt="your device place holder picture" />
      </div>
      <div
        className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 border-white border-8 bg-white w-[120px] h-[40px] rounded-2xl z-10"
        onClick={() => {
          setOn((on) => !on);
          handleRequest(props.name);
        }}
      >
        <div
          className={`absolute bg-[#ec554a] h-full w-1/2 -z-10 rounded-full transition-transform ${
            on ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
        <div className="h-full z-20 text-gray-700 font-bold flex justify-around items-center">
          <p className="">ON</p>
          <p className="">OFF</p>
        </div>
      </div>
      <div className="z-10">
        <p className="text-2xl font-bold text-gray-700 antialiased text-center">
          {props.name}
        </p>
      </div>
      <div
        className={`z-0 absolute w-full h-full transition-all ${
          on ? "bgrd" : ""
        }`}
      ></div>
    </div>
  );
};

export default Device;
