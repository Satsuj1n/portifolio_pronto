"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500">
              Hello I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Felipe",
                1000,
                "Estudante de TI",
                1000,
                "Fullstack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-6">
            "Fascinado pela arte da programação: minha jornada como estudante de
            Ciência da Computação rumo ao desenvolvimento fullstack."
          </p>
          <div>
            <button
              className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 hover:bg-slate-20 w-full sm:w-fit text-white"
              href={"https://www.linkedin.com/in/felipe-lima-792624246/"}
            >
              Me contrate
            </button>
            <button
              className="px-1 py-1 rounded-full bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 hover:bg-slate-700 text-white  mt-3 w-full sm:w-fit"
              href={
                "https://www.mediafire.com/file/nb5rtgcbvf3ikqs/CurriculoOri.pdf/file"
              }
            >
              <span className="block bg-neutral-800 hover:bg-neutral-900 rounded-full px-5 py-2">
                Download Curriculo
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-neutral-800 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
