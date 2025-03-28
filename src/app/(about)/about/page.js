import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import Link from "next/link";

export default async function About() {
  return (
    <div>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start text-dark mx-20">
        Have a project in mind? Reach out to me 📞 from <Link href={"/contact"} className="!underline underline-offset-2">here</Link> and
        let's make it happen.
      </h2>
    </div>
  );
}
