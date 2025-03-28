import React from 'react'

const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];
const Skills = () => {
  return (
    <section className='w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark'>
        <span className='font-semibold text-4xl text-accent'>I'm comfortable in...</span>
        <ul className='flex flex-wrap mt-8 justify-start'>
            {
                SkillList.map((skill, index) => (
                    <li key={index} className='text-2xl font-in font-semibold text-center py-4 px-12 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer'>
                        {skill}
                    </li>
                ))
            }

        </ul>
    </section>
  )
}

export default Skills