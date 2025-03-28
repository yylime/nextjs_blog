import Category from "./Category";

const Categories = ({categories, currentSlug}) => {
  return (
    <div className="flex gap-4 items-start justify-start px-20 py-4 mt-10 border-t-2 border-b-2 border-solid border-dart flex-wrap font-medium mx-10 ml-10">
        {categories.map((category, index) => (
            <Category key={category} link={`/categories/${category}`} name={`#${category}`} active={currentSlug === category}></Category>
        ))}
    </div>
  );
};

export default Categories;
