import Head from "next/head";
import Article from "../components/Article";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Web Dev News</title>
        <meta
          name="keywords"
          content="web dev news javascript css react js develepment"
        ></meta>
      </Head>

      <Article Articles={articles}></Article>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
