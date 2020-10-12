type BlogType =
  | "all"
  | "learnToCode"
  | "careerDevelopment"
  | "insights"
  | "companyNews";

interface BlogContentParagraph {
  value: string;
  variant: string;
  fontSize: number;
  fontFamily: string;
}

interface Blog {
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
