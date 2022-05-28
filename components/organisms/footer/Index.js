import Image from "next/image";

const Footer = ({ styles }) => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://kalammallah.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Sami
      </a>
    </footer>
  );
};

export default Footer;
