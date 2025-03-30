import Image from "next/image";
import React from "react";
import profileCharactor from "/public/character.png";
const AboutCoverSection = () => {
  return (
    <section className="w-ful md:h-[75vh] border-b-2 border-solid border-dark dark:border-light dark:text-light flex flex-col md:flex-row items-center justify-center text-dark">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light dark:text-light flex justify-center">
        <Image
          src={profileCharactor}
          alt="yylime"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center pb-10 px-5 xs:px-10 lg:px-16">
        <h2 className="font-bold text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="font-medium capitalize">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I'm A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
