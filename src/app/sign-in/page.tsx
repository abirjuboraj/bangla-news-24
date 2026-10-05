"use client";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      email: userData.email as string,
      password: userData.password as string,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।");
      return;
    }

    if (data?.user) {
      toast.success("সফলভাবে সাইন ইন হয়েছে!");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await signIn.social({
      provider: "github",
    });
  };
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gray-50 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-lg sm:max-w-md sm:p-7 md:p-8">
        <div className="mb-6 text-center sm:mb-8">
          <div className="mb-3 flex justify-center sm:mb-4">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={55}
              height={55}
              className="h-12 w-12 sm:h-14 sm:w-14"
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            স্বাগতম
          </h1>

          <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm"
            >
              ইমেইল
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="আপনার ইমেইল লিখুন"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 sm:px-4 sm:py-3"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between sm:mb-2">
              <label
                htmlFor="password"
                className="text-xs font-medium text-gray-700 sm:text-sm"
              >
                পাসওয়ার্ড
              </label>
            </div>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 sm:px-4 sm:py-3"
            />
            <Link
              href="/forgot-password"
              className="text-[11px] text-red-600 hover:text-red-700 sm:text-xs md:text-sm"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:py-3"
          >
            সাইন ইন
          </button>
        </form>
        <div className="flex flex-col gap-2 mt-2">
          <button
          onClick={handleGoogleSignIn}
          type="button"
          className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <FcGoogle size={20} /> Sign in with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          type="button"
          className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <FaGithub size={20} /> Sign in with Github
        </button>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500 sm:mt-6 sm:text-sm">
          নতুন ব্যবহারকারী?{" "}
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
