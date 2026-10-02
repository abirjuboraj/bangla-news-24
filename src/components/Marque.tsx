import { News } from "@/type/type";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marque = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");

  const data = await res.json();

  const headLines: News[] = data.data;

  return (
    <div className="bg-red-700 text-white ">
      <div className="flex items-center max-w-7xl mx-auto">
        <div className="bg-red-800 p-2 font-bold">সর্বশেষ</div>
        <MarqueeText duration={20} direction="right">
          {headLines.map((news: News) => (
            <span key={news.id}>
              <span>{news.title}</span>
              <span className="mx-3">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marque;
