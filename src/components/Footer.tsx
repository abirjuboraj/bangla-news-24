import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <Link href="/">
              {" "}
              <h2 className="text-lg font-bold text-red-700">Bangla News 24</h2>
            </Link>
            <p className="mt-1 text-sm text-neutral-500">
              সর্বশেষ সংবাদ, সবার আগে।
            </p>
          </div>

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
