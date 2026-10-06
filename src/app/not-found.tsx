import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={65}
            height={65}
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
        </div>

        <div className="mb-3">
          <h1 className="text-7xl font-extrabold tracking-tight text-red-600 sm:text-8xl">
            404
          </h1>
        </div>

        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা ঠিকানাটি
          ভুল হতে পারে।
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-6 sm:py-3"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
