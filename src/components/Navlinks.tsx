
import { NavlinkType } from "@/type/type";
import Link from "next/link";

const Navlinks = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");

    const data = await res.json();

    const navs:NavlinkType[] = data.data;

    console.log(navs);

    const filteredNavs = navs.filter((nav:NavlinkType) => nav.scrapable);


    return (
        <div className="flex gap-4 justify-center py-2 text-neutral-600 ">
            <Link className="hover:text-red-500" href={"/"}>হোম</Link>
            {filteredNavs.map((nav:NavlinkType, i:number)=> <Link key={i} className="hover:text-red-500" href={nav.slug}>{nav.title}</Link>)}
        </div>
    );
};

export default Navlinks;