import { MainNewsType } from "@/type/type";
import Link from "next/link";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReadNews: MainNewsType[] = data.data;
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <h2 className="mb-4 border-b-2 border-red-500 pb-2 text-xl font-semibold">
        সর্বাধিক পঠিত
      </h2>

      <div>
        {mostReadNews.map((news, index) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <div className="group flex gap-4 border-b border-neutral-200 py-4 last:border-b-0 ">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                {index + 1}
              </span>

              <h3
                className="text-[15px] font-medium leading-6 text-neutral-700 transition-colors duration-300 group-hover:text-red-600
            group-hover: cursor-pointer"
              >
                {news.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
