import { News } from "@/type/type";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marque = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");

  const data = await res.json();

  const headLines: News[] = data.data;

  return (
    <div className="bg-red-700 text-white  ">
      <div className="flex items-center max-w-7xl mx-auto ">
        <div className="bg-red-800 p-2 font-bold">সর্বশেষ</div>
        <MarqueeText duration={10} direction="right">
          {headLines.map((news: News) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className=" hover:underline"
            >
              <span>{news.title}</span>
              <span className="mx-3">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marque;
