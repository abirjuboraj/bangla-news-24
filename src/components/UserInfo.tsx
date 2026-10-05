"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session } = useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error("সাইন আউট করা সম্ভব হয়নি।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে।");
  };

  return (
    <div className="absolute right-3 top-3 sm:right-4 sm:top-4 md:right-6 md:top-5">
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-red-500 via-red-600 to-rose-700 text-xs font-bold text-white shadow-sm ring-2 ring-red-100 sm:h-9 sm:w-9 sm:text-sm">
              <Link href="/profile">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={36} height={36} className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
                />
              ) : (
                user.name?.charAt(0).toUpperCase()
              )}</Link>
            </div>

            <span className="hidden max-w-24 truncate text-sm font-semibold text-neutral-700 sm:block md:max-w-32 md:text-base">
              {user.name}
            </span>
          </div>

          <button
            onClick={handleSignOut}
            className="rounded-lg bg-red-500 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-3 sm:py-2 sm:text-sm"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex gap-1.5 sm:gap-2">
          <Link
            href="/sign-in"
            className="flex items-center text-xs text-neutral-600 transition hover:text-red-500 sm:text-sm md:text-base"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-red-500 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:text-base"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
