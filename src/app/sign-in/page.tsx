import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
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
            স্বাগতম
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
        </div>

        <form className="space-y-5">
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
            <div className="mb-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড
              </label>
            </div>

            <input
              id="password"
              type="password"
              required
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
            <Link
              href="/forgot-password"
              className="text-xs text-red-600 hover:text-red-700 sm:text-sm"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            প্রবেশ করুন
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          নতুন ব্যবহারকারী?
          <Link
            href="/sign-up"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignInPage;
