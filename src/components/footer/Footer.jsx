import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>hellodev</div>
      <div className={styles.text}>
        hellodev createive thoughts agency © All rights reserved
      </div>
    </div>
  );
};

export default Footer;
