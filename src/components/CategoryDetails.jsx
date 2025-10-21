import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryDetails = () => {
  const [NewsDataCategory, setNewsDataCategory] = useState([]);
  const { id } = useParams();
  const NewsData = useLoaderData();
  console.log(NewsData);
  console.log(id);
  useEffect(() => {
    if (id === "0") {
      setNewsDataCategory(NewsData);
      console.log(NewsDataCategory);
    } else if (id === "1") {
      const filterNewsData = NewsData?.filter((news) => {
        return news?.others?.is_today_pick === true;
      });
      console.log(filterNewsData);
      setNewsDataCategory(filterNewsData);
    } else {
      const filterNewsData = NewsData?.filter((news) => {
        return news?.category_id == id;
      });
      setNewsDataCategory(filterNewsData);
      console.log(filterNewsData);
    }
  }, [id, NewsData]);

  console.log(NewsDataCategory);
  return (
    <div className="grid grid-cols-1 gap-3 ">
      {NewsDataCategory?.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryDetails;
