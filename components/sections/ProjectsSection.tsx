import SectionTable from "components/SectionTable";
import SectionTitle from "components/SectionTitle";
import { Data } from "types";

const ProjectsSection = ({ projects }: { projects: Data[] }) => {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <SectionTable data={projects} type="project" />
    </section>
  );
};

export default ProjectsSection;
