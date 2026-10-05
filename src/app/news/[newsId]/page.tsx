import Image from "next/image";
import { NewsDetailsType } from "@/type/type";

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news details");
  }

  const data = await res.json();

  const newsDetails: NewsDetailsType = data.data;

  const publishedDate = new Date(newsDetails.firstPublished).toLocaleDateString(
    "bn-BD",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <article>
        <h1 className="text-3xl font-bold leading-relaxed text-gray-900 md:text-5xl">
          {newsDetails.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-gray-200 pb-5 text-sm text-gray-500">
          {newsDetails.byline?.[0]?.name && (
            <p className="font-medium text-gray-800">
              {newsDetails.byline[0].name}
            </p>
          )}

          <p>{publishedDate}</p>
        </div>

        <div className="mt-8">
          {newsDetails.body.map((item, index) => {
            if (item.type === "text") {
              return (
                <p
                  key={index}
                  className="mb-6 text-justify text-lg leading-loose text-gray-700"
                >
                  {item.text}
                </p>
              );
            }

            if (item.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="mb-5 mt-10 text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl"
                >
                  {item.text}
                </h2>
              );
            }

            if (item.type === "image" && item.url) {
              return (
                <figure key={index} className="my-8">
                  <Image
                    src={item.url}
                    alt={item.altText || newsDetails.title}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-full"
                  />

                  {item.caption && (
                    <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}

                  {item.copyrightHolder && (
                    <p className="mt-1 text-xs text-gray-400">
                      © {item.copyrightHolder}
                    </p>
                  )}
                </figure>
              );
            }

            return null;
          })}
        </div>

        {newsDetails.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-gray-200 pt-6">
            {newsDetails.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  );
};

export default NewsDetailsPage;
