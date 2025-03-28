import Link from "next/link";
import React from "react";
import { cx } from "@/utils";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 px-8 rounded-full capitalize font-semibold border-2 border-solid border-dark hover:scale-105 transition-all ease duration-200",
        props.className,
        active ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
