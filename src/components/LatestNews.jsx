import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className=" w-11/12 mx-auto flex gap-2 items-center p-4 mt-3 bg-[#F3F3F3] ">
      <button className="text-base-100 bg-secondary px-4 py-2">Latest</button>
      <Marquee className="flex gap-0" pauseOnHover={true} speed={200}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          ea.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
