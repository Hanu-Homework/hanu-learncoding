type BlogType =
  | "all"
  | "learnToCode"
  | "careerDevelopment"
  | "insights"
  | "companyNews";

interface BlogContentParagraph {
  value: string;
  isHeader: boolean;
}

interface Blog {
  id: string;
  type: BlogType;
  postedAt: Date;
  approximatedReadingTime: number;
  title: string;
  media: {
    desImgSrc: string;
  };
  content: {
    paragraphs: BlogContentParagraph[];
  };
}

export default Blog;
