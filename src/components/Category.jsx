import { use } from "react";
const AllCategory = fetch("categories.json").then((res) => res.json());
console.log(AllCategory);

const Category = () => {
  const CategoryData = use(AllCategory);
  console.log(CategoryData);

  return (
    <div>
      <h1>ALL Category( {CategoryData.length})</h1>
    </div>
  );
};

export default Category;
