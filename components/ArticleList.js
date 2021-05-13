import styles from "../styles/artical.module.css";
import Articalitem from "./Articalitem";

const ArticleList = ({ articals }) => {
  return (
    <div className={styles.grid}>
      {articals.map(elem => (
        <Articalitem article={elem} />
      ))}
    </div>
  );
};

export default ArticleList;
