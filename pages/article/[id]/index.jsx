import { useRouter } from "next/router";
import Link from "next/link";

function Article({ article }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Back</Link>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default Article;
