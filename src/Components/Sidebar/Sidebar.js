import { useContext } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.css";
import sidepanelContext from "../../context/sidepanelContext";

const Sidebar = (props) => {
  const sidebarCtx = useContext(sidepanelContext);

  return (
    <div
      className={`${styles.sidebar} ${
        sidebarCtx.sidepanelStatus ? styles.active : styles.inactive
      }`}
    >
      <SidebarItem title={"Home"} name={"Home"} />
      <SidebarItem title={"Categories"} name={"Categories"} />
      <SidebarItem title={"Customer Reviews"} name={"Customer Reviews"} />
      <SidebarItem title={"All Artworks"} name={"All Artworks"} />
      <SidebarItem title={"Buy Sketches"} name={"Buy Sketches"} />
    </div>
  );
};
export default Sidebar;
