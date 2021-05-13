import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articals }) {
  return (
    <div>
      <ArticleList articals={articals} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}api/artical`);
  const articals = await res.json();

  return {
    props: {
      articals,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=5`
//   );
//   const articals = await res.json();

//   return {
//     props: {
//       articals,
//     },
//   };
// };
