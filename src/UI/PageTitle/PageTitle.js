import styles from "./PageTitle.module.css";
const PageTitle = (props) => {
  return <div className={styles.Page_title}>{props.title}</div>;
};
export default PageTitle;
