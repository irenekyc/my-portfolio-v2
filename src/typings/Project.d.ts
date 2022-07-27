export type Project = {
  title: string;
  category: string;
  excerpt: string;
  fullDescription: string;
  myRole: string | undefined;
  projectDate: Date;
  image: string | undefined;
  tools: Array<string>;
  mainTag: Array<string>;
  github: string | undefined;
  projectUrl: string | undefined;
};
