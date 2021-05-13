import Link from "next/link";
import Meta from "../../../components/Meta";
import { server } from "../../../config/index";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/" p>Home</Link>{" "}
    </>
  );
};

export const getStaticProps = async context => {
  const res = await fetch(`${server}api/artical/${context.params.id}`);

  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}api/artical`);
  const articles = await res.json();
  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};

// export const getStaticProps = async context => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();
//   return {
//     props: { article },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map(article => article.id);
//   const paths = ids.map(id => ({ params: { id: id.toString() } }));
//   return { paths, fallback: false };
// };

export default article;
