export interface Data {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
    imageURL?: string;
  };
  content: string;
}
