import clsx from "clsx";
import SectionTitle from "components/SectionTitle";
import Link from "next/link";
import pageConfig from "pageConfig.json";

const ContactSection = () => {
  const { contact } = pageConfig;
  return (
    <section className="mb-10">
      <SectionTitle>Contact</SectionTitle>
      <div className={clsx("flex", "flex-wrap", "gap-2")}>
        {contact.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={clsx(
                "bg-neutral-200",
                "dark:bg-neutral-800",
                "rounded-[3px]",
                "text-sm",
                "px-3",
                "py-[3px]",
                "cursor-pointer",
                "hover:bg-neutral-100",
                "dark:hover:bg-neutral-700",
                "transition-colors",
                "duration-200"
              )}
            >
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
