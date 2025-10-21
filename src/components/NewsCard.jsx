import { FaEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
// import errorImg from "../assets/portrait-smiling-woman-showing-air-ticket-passport.jpg";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, total_view, rating, author } = news;
  const cleanUrlImg = news.author.img.split("?")[0];

  return (
    <div className="card w-full bg-base-100 shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={cleanUrlImg}
            alt={author.name}
            className="w-10 h-10 rounded-full"
            // onError={(e) => (e.target.src = "/fallback.jpg")}
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <FiShare2 className="text-gray-500 text-lg cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-bold leading-snug hover:text-primary cursor-pointer">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="News thumbnail"
          className="rounded-xl w-full object-cover h-[220px]"
        />
      </figure>

      {/* Details */}
      <div className="p-4 pt-3 text-gray-600 text-sm leading-relaxed">
        <p>{details.length > 200 ? `${details.slice(0, 200)}...` : details}</p>
        {details.length > 200 && (
          <span className="text-primary font-medium cursor-pointer">
            Read More
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="font-medium text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
