import style from "../styles/Artical.module.css";
import Link from "next/link";

const Articalitem = ({ article }) => {
  return (
    <Link href="/artical/[id]" as={`/artical/${article.id}`}>
      <a className={style.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default Articalitem;
