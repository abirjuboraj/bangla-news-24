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

export type MainNewsType = {
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

export type sectionType = {
  title: string;
  curationId: string;
  curationType: string;
  articles: MainNewsType[];
};

export type NewsBody =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "image";
      url: string;
      width: number;
      height: number;
      caption: string | null;
      altText: string;
      copyrightHolder: string;
    };
export type NewsDetailsType = MainNewsType & {
  body: NewsBody[];
  byline: {
    name: string;
  }[];
  tags: string[];
};
