"use client";

import Image from "next/image";
import { useState } from "react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { FaEnvelope, FaCalendarAlt, FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";


const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  const [isEditing, setIsEditing] = useState(false);

  const user = session?.user;

  const handleUpdate = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const NewUserData = Object.fromEntries(formData.entries());

    const { error } = await updateUser({
      name: NewUserData.name as string,
      image: NewUserData.image as string,
    });

    if (error) {
      toast.error(error.message || "প্রোফাইল আপডেট করা সম্ভব হয়নি।");
      return;
    }

    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে।");
    setIsEditing(false);
  };

  const handleSignOut = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error("সাইন আউট করা সম্ভব হয়নি।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে।");
  };

  if (isPending) {
    return (
      <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gray-50">
        <span className="loading loading-spinner text-red-600"></span>
      </main>
    );
  }

  if (!user) {
    redirect("/");
  }

  const firstLetter = user.name?.charAt(0)?.toUpperCase() || "U";

  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "তথ্য নেই";

  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md sm:p-7">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-red-500 to-rose-700 text-3xl font-bold text-white shadow-md ring-4 ring-red-50">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              ) : (
                firstLetter
              )}
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition hover:bg-red-700"
              aria-label="Edit profile"
            >
              <FaCamera size={13} />
            </button>
          </div>

          <h1 className="mt-4 text-xl font-bold text-gray-900">{user.name}</h1>

          <p className="mt-1 text-sm text-gray-500">Bangla News 24 সদস্য</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3">
            <FaEnvelope className="shrink-0 text-red-500" />

            <div className="min-w-0">
              <p className="text-xs text-gray-500">ইমেইল</p>
              <p className="truncate text-sm font-medium text-gray-800">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3">
            <FaCalendarAlt className="shrink-0 text-red-500" />

            <div>
              <p className="text-xs text-gray-500">সদস্য হয়েছেন</p>
              <p className="text-sm font-medium text-gray-800">{joinedDate}</p>
            </div>
          </div>
        </div>

        {isEditing && (
          <form
            onSubmit={handleUpdate}
            className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4"
          >
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-gray-700"
                >
                  নাম
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user.name || ""}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="mb-1.5 block text-xs font-medium text-gray-700"
                >
                  Profile Image URL
                </label>

                <input
                  id="image"
                  name="image"
                  type="url"
                  defaultValue={user.image || ""}
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  আপডেট করুন
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-white"
                >
                  বাতিল
                </button>
              </div>
            </div>
          </form>
        )}

        <button
          onClick={handleSignOut}
          className="mt-6 w-full rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          সাইন আউট
        </button>
      </div>
    </main>
  );
};

export default ProfilePage;
