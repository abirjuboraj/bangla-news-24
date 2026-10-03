import { MainNewsType } from "@/type/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news, isMainNews = false }: { news: MainNewsType, isMainNews: boolean }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="group block overflow-hidden card h-full bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ">
        <figure className="overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            width={400}
            height={300}
            className="w-full transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="card-body">
          <span className="text-red-500 font-semibold text-sm">
            {news.category}
          </span>

          <h2 className={`card-title text-base transition-colors duration-300 group-hover:text-red-500 ${isMainNews ? "text-xl" : ""}`}>
            {news.title}
          </h2>

          <p className="line-clamp-2 text-neutral-600 text-sm">
            {news.description}
          </p>

          <span className="text-neutral-500 text-xs">
            {new Date(news.firstPublished).toLocaleString("bn-BD", {
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
    </Link>
  );
};

export default NewsCard;
