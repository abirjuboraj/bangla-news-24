import { MainNewsType, sectionType } from "@/type/type";
import Image from "next/image";

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
            <div
              key={article.id}
              className="group block overflow-hidden card bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg "
            >
              <figure className="overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  width={400}
                  height={300}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body">
                <span className="text-red-500 font-semibold text-sm">
                  {article.category}
                </span>

                <h2 className="card-title text-base transition-colors duration-300 group-hover:text-red-500">
                  {article.title}
                </h2>

                <p className="line-clamp-2 text-neutral-600 text-sm">
                  {article.description}
                </p>

                <span className="text-neutral-500 text-xs">
                  {new Date(article.firstPublished).toLocaleString("bn-BD", {
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
          ))}
      </div>
    </div>
  );
};

export default NewsSections;
