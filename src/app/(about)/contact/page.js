"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your email"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone number"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register}
        rows={3}
        placeholder="My project is about ..."
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0  placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input type="submit" className="mt-8 font-medium inline-block capitalize text-lg border-2 border-dark rounded-xl bg-light/90 hover:bg-dark hover:text-light cursor-pointer text-dark px-4 py-2" value={"send request"}/>
    </form>
  );
};
const LottileAnimation = () => {
  return <DotLottieReact src="/animation_llqd7ey4.lottie" loop autoplay />;
};

export default function Contact() {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
        <LottileAnimation />
      </div>

      <div className="w-3/5 flex flex-col items-center justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let's connect</h2>
        <ContactForm />
      </div>
    </section>
  );
}
