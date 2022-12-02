import clsx from "clsx";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className={clsx("text-sm", "font-normal", "underline", "mb-4")}>
      {children}
    </h3>
  );
};

export default SectionTitle;
