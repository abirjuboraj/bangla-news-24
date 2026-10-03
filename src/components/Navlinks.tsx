import { NavlinkType } from "@/type/type";
import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const navs: NavlinkType[] = data.data;

  const filteredNavs = navs.filter(
    (nav: NavlinkType) => nav.scrapable
  );

  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-3 py-1.5 text-xs text-neutral-600 sm:gap-x-4 sm:px-4 sm:py-2 sm:text-sm md:gap-x-5 md:px-6 md:py-2.5 md:text-base">
      <Link className="hover:text-red-500" href="/">
        হোম
      </Link>

      {filteredNavs.map((nav: NavlinkType, i: number) => (
        <Link
          key={i}
          className="hover:text-red-500"
          href={`/category/${nav.slug}`}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;