import clsx from "clsx";
import RouteAnimate from "components/AnimateLayout";
import Meta from "components/Meta";
import {
  ContactSection,
  PostsSection,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from "components/sections";

import { GetStaticProps } from "next";
import { getPosts, getProjects } from "services";
import { Data } from "types";
import pageConfig from "pageConfig.json";
const { profile } = pageConfig;

export default function Home({
  projects,
  posts,
}: {
  projects: Data[];
  posts: Data[];
}) {
  console.log(`https://${process.env.VERCEL_URL}`);
  return (
    <>
      <Meta
        title={`${profile.name} - Homepage`}
        description={profile.description}
        image={`${
          process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
        }/api/og-image`}
      />
      <RouteAnimate>
        <div className={clsx("grid", "gap-7")}>
          <ProfileSection />
          <SkillsSection />
          <ProjectsSection projects={projects} />
          <PostsSection posts={posts} />
          <ContactSection />
        </div>
      </RouteAnimate>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const projects = await getProjects();
    const posts = await getPosts();

    return {
      props: {
        projects,
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: [],
        posts: [],
      },
    };
  }
};
