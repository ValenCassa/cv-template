import Head from "next/head";

interface MetaProps {
  image?: string;
  description?: string;
  title?: string;
}

const Meta = ({ image, description, title }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
