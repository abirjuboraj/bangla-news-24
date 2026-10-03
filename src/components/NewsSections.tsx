import { MainNewsType, sectionType } from "@/type/type";
import NewsCard from "./NewsCard";

const NewsSections = ({ news }: { news: sectionType }) => {
  const hasNews = news.articles.some((article) => article.type !== "link");
  return (
    <div className="my-7">
      {hasNews && (
        <h2 className="font-semibold pb-2 text-xl border-b-3 border-red-500">
          {news.title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {news.articles
          .filter((article) => article.type !== "link")
          .map((article: MainNewsType) => (
           <NewsCard  key={article.id} news={article}></NewsCard>
          ))}
      </div>
    </div>
  );
};

export default NewsSections;
