import React from "react";
import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          officia magnam quod quidem vitae similique, vel sit, soluta nemo ea
          inventore.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus est
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shope now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
