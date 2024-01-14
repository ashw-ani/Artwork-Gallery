import styles from "./ImageContainer.module.css";
const ImageContainer = (props) => {
  return <div className={styles.img_container}>{props.children}</div>;
};
export default ImageContainer;
