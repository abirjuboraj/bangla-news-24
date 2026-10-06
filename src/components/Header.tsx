import Image from "next/image";
import Navlinks from "./Navlinks";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header>
      <div className="relative mx-auto flex max-w-7xl items-center justify-start px-3 py-3 sm:justify-center sm:px-4 sm:py-4 md:px-6 md:py-5">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div>
              <Image
                src="/logo.webp"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
              />
            </div>
          </Link>

          <div>
            <Link href="/">
              <h2 className="text-lg font-semibold text-red-700 sm:text-xl md:text-2xl">
                Bangla News 24
              </h2>
            </Link>

            <p className="text-[10px] text-neutral-500 sm:text-xs md:text-sm">
              {date}
            </p>
          </div>
        </div>

        <UserInfo></UserInfo>
      </div>

      <Navlinks />
    </header>
  );
};

export default Header;
