import NewsCard from "@/components/NewsCard";
import { MainNewsType } from "@/type/type";

const CategoryNews = async({ params }: { params: Promise<{ categoryId: string }> }) => {

    const {categoryId} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);

    const data = await res.json();

    const categoryNews:MainNewsType[] = data.data;
    console.log(categoryNews);
  return (
    <div className="container mx-auto max-w-7xl  px-5 mt-3">
        <h2 className="font-bold py-2 text-2xl border-b-3 border-red-500">
          {data.title}
        </h2>
    <div className = " grid grid-cols-1 gap-5 py-7 md:grid-cols-2 lg:grid-cols-3">
      {categoryNews.map((news:MainNewsType)=> <NewsCard key={news.id} news={news}></NewsCard>)}
    </div>
    </div>
  );
};

export default CategoryNews;
