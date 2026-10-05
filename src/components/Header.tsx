import Image from "next/image";
import Navlinks from "./Navlinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header>
      <div className="relative mx-auto flex max-w-7xl items-center justify-start px-3 py-3 sm:justify-center sm:px-4 sm:py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src="/logo.webp"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-red-700 sm:text-xl md:text-2xl">
              Bangla News 24
            </h2>

            <p className="text-[10px] text-neutral-500 sm:text-xs md:text-sm">
              {date}
            </p>
          </div>
        </div>

        <div className="absolute right-3 top-5 flex gap-1.5 sm:right-4 sm:top-4 sm:gap-2 md:right-6 md:top-5">
          <button className="text-xs text-neutral-600 hover:text-red-400 sm:text-sm md:text-base cursor-pointer">
            <Link href="/sign-in">সাইন ইন</Link>
          </button>

          <button className="btn min-h-8 h-8 px-2.5 bg-red-500 text-xs font-semibold text-white hover:bg-red-700 sm:h-9 sm:px-3 sm:text-sm md:h-10 md:px-4 md:text-base">
            <Link href="/sign-up">সাইন আপ</Link>
          </button>
        </div>
      </div>

      <Navlinks />
    </header>
  );
};

export default Header;
