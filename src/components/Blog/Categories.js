import Category from "./Category";

const Categories = ({categories, currentSlug}) => {
  return (
    <div className="flex gap-4 items-start justify-start px-0 md:px-10 sxl:px-20 py-4 mt-10 border-t-2 border-b-2 border-solid border-dark flex-wrap font-medium mx-5 md:mx-10 m;-5 md:ml-10 text-dark dark:text-white/80 dark:border-light/80">
      {categories.map((category, index) => (
        <Category
          key={category}
          link={`/categories/${category}`}
          name={`#${category}`}
          active={currentSlug === category}
        ></Category>
      ))}
    </div>
  );
};

export default Categories;
