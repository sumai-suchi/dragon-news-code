import { use } from "react";
import { Navigate, NavLink } from "react-router";
const AllCategory = fetch("/categories.json").then((res) => res.json());
console.log(AllCategory);

const Category = () => {
  const CategoryData = use(AllCategory);
  console.log(CategoryData);

  return (
    <div>
      <h1>ALL Category( {CategoryData.length})</h1>
      <div className="grid grid-cols-1 gap-4">
        {CategoryData.map((cat) => (
          <NavLink
            className="btn  text-accent bg-white border-none hover:bg-base-200 "
            key={cat.id}
            to={`/category/${cat.id}`}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
