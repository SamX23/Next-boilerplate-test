import MetaTags from "../../atoms/Head";
import Main from "../../organisms/main";
import Footer from "../../organisms/footer";
import styles from "./style.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <MetaTags title="Sami Boilerplate" desc="A Next js boilerplate" />

      <Main styles={styles} />

      <Footer styles={styles} />
    </div>
  );
};

export default Homepage;
