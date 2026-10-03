import MainNews from "@/components/MainNews";
import Marque from "@/components/Marque";
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
    <div className = "container mx-auto">
     <Marque></Marque>
     <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto my-5 px-5">
      <div className=" col-span-2">
        <MainNews news={mainNews}></MainNews>
        <div>
          {
            otherSections.map((news:sectionType)=> 
             <NewsSections key={news.curationId} news={news}></NewsSections>
            )
          }
        </div>
      </div>
      <div className="col-span-1">
          <MostRead></MostRead>
      </div>
     </div>
    </div>
  );
}
