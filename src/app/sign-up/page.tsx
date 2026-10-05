"use client";
import { signIn, signUp } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onsubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      email: userData.email as string,
      password: userData.password as string,
      name: userData.name as string,
      callbackURL: "/",
    });

    if (data?.user) {
      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
      redirect("/");
    }
    if (error) {
      console.error(error.message || "অ্যাকাউন্ট তৈরি করা সম্ভব হয়নি।");
    }
  };

  const handleGoogleSignUp = async () => {
    await signIn.social({ provider: "google" });
  };

   const handleGithubSignUp = async () => {
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
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
            Bangla News 24-এর সাথে যুক্ত হোন
          </p>
        </div>

        <form onSubmit={onsubmit} className="space-y-3.5 sm:space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm"
            >
              আপনার নাম
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="আপনার নাম লিখুন"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 sm:px-4 sm:py-3"
            />
          </div>

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
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm"
            >
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 sm:px-4 sm:py-3"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="পাসওয়ার্ডটি আবার লিখুন"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 sm:px-4 sm:py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:py-3"
          >
            সাইন আপ
          </button>
          
        </form>

        <div className="flex flex-col gap-2 mt-2">
                  <button
                  onClick={handleGoogleSignUp}
                  type="button"
                  className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <FcGoogle size={20} /> Sign up with Google
                </button>
                <button
                  onClick={handleGithubSignUp}
                  type="button"
                  className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <FaGithub size={20} /> Sign up with Github
                </button>
                </div>

        <p className="mt-5 text-center text-xs text-gray-500 sm:mt-6 sm:text-sm">
          ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            সাইন ইন
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;
