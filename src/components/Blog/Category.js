import Link from "next/link";
import React from "react";
import { cx } from "@/utils";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-8 rounded-full capitalize border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200",
        props.className,
        active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light text-dark dark:text-light dark:bg-dark"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
