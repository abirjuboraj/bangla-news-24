import { MainNewsType } from "@/type/type";
import NewsCard from "./NewsCard";
import Link from "next/link";

const MainNews = ({ news }: { news: MainNewsType[] }) => {
  const [firstNews, ...listedNews] = news;

  if (!firstNews) return null;

  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <NewsCard news={firstNews}></NewsCard>
      </div>

      <div className="flex-1">
        <div className="border border-neutral-300 rounded-lg p-3">
          {listedNews.slice(0, 4).map((newsItem, index) => (
            <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
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
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;