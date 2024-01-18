import styles from "./SidebarItem.module.css";
// import { NavLink } from "react-router-dom";
const SidebarItem = (props) => {
  return (
    <div
      className={styles.sidebar_item}
      name={props.name}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};
export default SidebarItem;
