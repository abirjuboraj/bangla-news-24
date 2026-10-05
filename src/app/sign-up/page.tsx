import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gray-50 px-4 py-8 sm:py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-8 text-center">
          <div className="mb-3 flex justify-center">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={55}
              height={55}
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Bangla News 24-এর সাথে যুক্ত হোন
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              আপনার নাম
            </label>

            <input
              id="name"
              type="text"
              required
              placeholder="আপনার নাম লিখুন"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              ইমেইল
            </label>

            <input
              id="email"
              type="email"
              required
              placeholder="আপনার ইমেইল লিখুন"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              required
              placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              id="confirmPassword"
              type="password"
              required
              placeholder="পাসওয়ার্ডটি আবার লিখুন"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          ইতোমধ্যে অ্যাকাউন্ট আছে?
          <Link
            href="/sign-in"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            প্রবেশ করুন
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;