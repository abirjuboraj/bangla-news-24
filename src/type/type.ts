export type NavlinkType = {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
};

export type News = {
  category: string;
  description: string;
  firstPublished: string;
  id: string;
  imageAlt: string;
  imageUrl: string;
  isLive: boolean;
  lastPublished: string;
  link: string;
  source: string;
  title: string;
  type: string;
};