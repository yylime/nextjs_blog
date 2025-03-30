"use client"

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
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
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
      <input
        type="submit"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-lg border-2 border-dark rounded-xl bg-light/90 hover:bg-dark hover:text-light cursor-pointer text-dark dark:border-light sm:px-3 py-2"
        value={"send request"}
      />
    </form>
  );
};

export default ContactForm;