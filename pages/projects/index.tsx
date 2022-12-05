import clsx from "clsx";
import RouteAnimate from "components/AnimateLayout";
import PostCard from "components/PostCard";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getProjects } from "services";
import { Data } from "types";

const ProjectsView = ({ projects }: { projects: Data[] }) => {
  return (
    <RouteAnimate>
      <Link href={"/"}>
        <p
          className={clsx(
            "text-md",
            "text-neutral-400",
            "dark:text-neutral-500",
            "cursor-pointer",
            "hover:text-neutral-500",
            "dark:hover:text-neutral-400",
            "transition-colors",
            "duration-200",
            "mb-4",
            "italic"
          )}
        >
          ← Back
        </p>
      </Link>
      <div className={clsx("grid", "gap-5")}>
        {projects.map((project) => (
          <PostCard item={project} key={project.slug} type={"project"} />
        ))}
      </div>
    </RouteAnimate>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const projects = await getProjects({});

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: [],
      },
    };
  }
};

export default ProjectsView;
