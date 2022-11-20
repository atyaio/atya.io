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
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4">
        <div className="container flex flex-col gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <FormattedMessage id="page.home.head.title" />
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
