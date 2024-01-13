import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Artrwork Gallery</h1>
      <div className={styles.ham} onClick={props.onClick}>
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </div>
    </div>
  );
};
export default Header;
