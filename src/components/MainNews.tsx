import { MainNewsType } from "@/type/type";
import Image from "next/image";

const MainNews = ({ news }: { news: MainNewsType[] }) => {
  const [firstNews, ...listedNews] = news;

  if (!firstNews) return null;

  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <div className="group card bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <figure className="overflow-hidden">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              width={400}
              height={300}
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
          </figure>

          <div className="card-body">
            <span className="text-red-500 font-semibold">
              {firstNews.category}
            </span>

            <h2 className="card-title transition-colors duration-300 group-hover:text-red-500">
              {firstNews.title}
            </h2>

            <p className="line-clamp-3 text-neutral-600">
              {firstNews.description}
            </p>

            <span className="text-neutral-500 text-xs">
              {new Date(firstNews.firstPublished).toLocaleString("bn-BD", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="border border-neutral-300 rounded-lg p-3">
          {listedNews.slice(0, 4).map((newsItem, index) => (
            <div
              key={newsItem.id}
              className={`group py-3 transition-all duration-300 hover:bg-base-200 hover:rounded-md ${
                index !== 3 ? "border-b border-gray-300" : ""
              }`}
            >
              <span className="text-red-500 font-semibold text-xs">
                {newsItem.category}
              </span>

              <h2 className="card-title text-base transition-colors duration-300 group-hover:text-red-500">
                {newsItem.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;