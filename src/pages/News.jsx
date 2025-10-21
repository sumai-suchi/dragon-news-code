import { useLoaderData } from "react-router";

const News = () => {
  const NewsData = useLoaderData();
  console.log(NewsData);
  return <div></div>;
};

export default News;
