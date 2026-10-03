import { MainNewsType } from "@/type/type";


const NewsDetailsPage = async({params}:{params: Promise<{newsId: string}>}) => {

    const {newsId} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();

    const newsDetails:MainNewsType = data.data;

    console.log(newsDetails);

    return (
        <div>
            Detailed News Page Content
        </div>
    );
};

export default NewsDetailsPage;