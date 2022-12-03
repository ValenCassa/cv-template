import ExperienceTable from "components/ExperienceSection";
import pageConfig from "pageConfig.json";
import SectionTitle from "components/SectionTitle";

const { experience } = pageConfig;

const ExperienceSection = () => {
  return (
    <section>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceTable data={experience} />
    </section>
  );
};

export default ExperienceSection;
