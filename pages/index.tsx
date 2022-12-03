import clsx from "clsx";
import RouteAnimate from "components/AnimateLayout";
import Meta from "components/Meta";
import {
  ContactSection,
  ExperienceSection,
  PostsSection,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from "components/sections";

import { GetServerSideProps, GetStaticProps } from "next";
import { BASE_URL, getPosts, getProjects } from "services";
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
  return (
    <>
      <Meta
        title={`${profile.name} - Homepage`}
        description={profile.description}
        image={`${BASE_URL}/api/og-image`}
      />
      <RouteAnimate>
        <div className={clsx("grid", "gap-7")}>
          <ProfileSection />
          <ExperienceSection />
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
