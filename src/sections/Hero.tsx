import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";

import { arrowRight } from "../assets/icons";
import React from "react";
import { statistics } from "../constants/index";
import { bigShoe1 } from "../assets/images/index";
import { shoes } from "../constants/index";

function Hero() {
  const [bigShoeImage, setBigShoeImage] = React.useState(bigShoe1);

  return (
    <React.Fragment>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button label="Shop now" iconURL={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <h1 className="text-4xl font-palanquin font-bold flex-col justify-center items-center">
                  {statistic.value}
                </h1>
                <p className="text-slate-gray leading-7 font-montserrat">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 items-center flex justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            className="w-full object-contain relative z-10"
            src={bigShoeImage}
            alt="Shoe"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe.bigShoe}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                  bigShoeImage={bigShoeImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
