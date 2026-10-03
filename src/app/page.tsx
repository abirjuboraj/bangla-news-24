import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsSections from "@/components/NewsSections";
import { MainNewsType, sectionType } from "@/type/type";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();

  const sectionData = data.data;

  const mainNews: MainNewsType[] = sectionData[0].articles;
  const otherSections: sectionType[] = sectionData.slice(1);

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-3 grid grid-cols-1 gap-6 px-3 sm:my-4 sm:gap-8 sm:px-4 md:my-5 md:gap-10 md:px-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MainNews news={mainNews} />

            {otherSections.map((news: sectionType) => (
              <NewsSections key={news.curationId} news={news} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <MostRead />
          </div>
        </div>
      </div>
    </div>
  );
}
