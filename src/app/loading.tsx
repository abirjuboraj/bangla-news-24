import Image from "next/image";

const Loading = () => {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-100 border-t-red-600" />

          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm sm:h-16 sm:w-16">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <h2 className="mt-5 text-lg font-bold text-gray-800 sm:text-xl">
          Bangla News 24
        </h2>

        <p className="mt-1 text-sm text-gray-500">লোড হচ্ছে...</p>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-600 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-600 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-600" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
