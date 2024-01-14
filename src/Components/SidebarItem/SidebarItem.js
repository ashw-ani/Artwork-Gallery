import styles from "./SidebarItem.module.css";
const SidebarItem = (props) => {
  return <div className={styles.sidebar_item}>{props.title}</div>;
};
export default SidebarItem;
