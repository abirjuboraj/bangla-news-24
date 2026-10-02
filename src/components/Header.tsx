import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <div className="flex items-center justify-center py-4 relative">
      <div className="flex items-center gap-2 ">
        <div>
          <Image src={"/logo.webp"} alt="Logo" width={40} height={40} />
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-red-700">Bangla News 24</h2>
          <p className="text-xs text-neutral-500">{date}</p>
        </div>
      </div>
      <div className="flex gap-2 absolute right-4 top-4">
        <button className="hover:text-red-400">সাইন ইন</button>
        <button className="btn bg-red-500 hover:bg-red-700 text-white font-semibold">
          সাইন আপ
        </button>
      </div>

      <Navlinks></Navlinks>
    </div>
  );
};

export default Header;
