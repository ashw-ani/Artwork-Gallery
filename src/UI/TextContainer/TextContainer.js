import styles from "./TextContainer.module.css";
const TextContainer = (props) => {
  return (
    <div className={styles.text_container}>
      <div className={styles.title}>{props.title}</div>
      {props.children}
    </div>
  );
};
export default TextContainer;
