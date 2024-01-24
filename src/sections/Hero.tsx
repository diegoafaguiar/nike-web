import Button from "../components/Button";

import { arrowRight } from "../assets/icons/index";
import * as React from "react";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="w-full flex  xl:flow-row justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p>Our Summer Collection</p>
          <h1 className="font-montserrat font-bold text-5xl text-black">
            <span className="text-6xl">The New Arrival</span>
            <br />
            <span className="text-6xl">Nike</span> Shoes
          </h1>
          <p className="text-lg text-slate-gray mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            accumsan.
          </p>
          <Button label="Shop Now" iconUrl={arrowRight} />
        </div>
      </section>
    </>
  );
}

export default Hero;
