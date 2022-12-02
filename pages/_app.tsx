import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Layout from "components/Layout";
import "inter-ui/inter.css";
import pageConfig from "pageConfig.json";
import ArticleLayout from "components/ArticleLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const { articlePaths } = pageConfig;

  const getComponent = () => {
    const isArticle = articlePaths.some((path) => asPath.includes(path));
    if (isArticle) {
      return (
        <ArticleLayout>
          <Component {...pageProps} key={asPath} />
        </ArticleLayout>
      );
    }

    return <Component {...pageProps} key={asPath} />;
  };

  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="og:title" content="Test" />
        <meta name="og:description" content="Test" />
        <meta
          name="og:image"
          content={`${
            process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
          }/api/og-image`}
        />
      </Head>
      <ThemeProvider>
        <Layout>
          <AnimatePresence mode="wait" initial>
            {getComponent()}
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}
