import React from "react";

import siteMetadata from "@/utils/siteMetaData";
import ContactForm from "@/components/Contact/ContactForm";
import LottileAnimation from "@/components/Contact/LottileAnimation";

export const metadata = {
  title: "Contact me",
  description: `Contact me though the form available on this page or email me at ${siteMetadata.email}`,
};



export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottileAnimation />
      </div>

      <div className="w-full md:w-3/5 flex flex-col items-center justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3x; sm:text-4xl">
          Let&apos;s connect
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
