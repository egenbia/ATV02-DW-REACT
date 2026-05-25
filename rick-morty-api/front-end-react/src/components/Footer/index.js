import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        {/* FOOTER LEFT */}
        <div className={styles.footerLeft}>
        </div>
        {/* FOOTER RIGHT */}
        <div className={styles.footerRight}>
          <ul>
            <li>Rick and Morty &copy; 2025</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
