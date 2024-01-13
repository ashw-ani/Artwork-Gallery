import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  console.log(props.status);

  return (
    <div
      className={`${styles.sidebar} ${
        props.status ? styles.active : styles.inactive
      }`}
    >
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
    </div>
  );
};
export default Sidebar;
