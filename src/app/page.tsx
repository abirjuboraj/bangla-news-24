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
        <div className="mx-auto my-5 grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MainNews news={mainNews}></MainNews>

            {otherSections.map((news: sectionType) => (
              <NewsSections key={news.curationId} news={news}></NewsSections>
            ))}
          </div>

          <div className="lg:col-span-1">
            <MostRead></MostRead>
          </div>
        </div>
      </div>
    </div>
  );
}
