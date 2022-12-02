import SectionTable from "components/SectionTable";
import SectionTitle from "components/SectionTitle";
import { Data } from "types";

const PostsSection = ({ posts }: { posts: Data[] }) => {
  return (
    <section>
      <SectionTitle>Posts</SectionTitle>
      <SectionTable data={posts} type="post" />
    </section>
  );
};

export default PostsSection;
