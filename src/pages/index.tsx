import { type NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

const Home: NextPage = () => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="flex flex-col gap-12 py-16 ">
          <h1 className="max-w-sm text-5xl font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
            <FormattedMessage id="page.home.head.title" />
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
