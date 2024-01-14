import { useContext } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.css";
import sidepanelContext from "../../context/sidepanelContext";
import { Navigate, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const sidebarCtx = useContext(sidepanelContext);
  const navigateTo = (event) => {
    const path = event.target.getAttribute("name");
    console.log(path);
    navigate(`/${path}`);
  };

  return (
    <div
      className={`${styles.sidebar} ${
        sidebarCtx.sidepanelStatus ? styles.active : styles.inactive
      }`}
    >
      <SidebarItem title={"Home"} name={"Home"} onClick={navigateTo} />
      <SidebarItem
        title={"Categories"}
        name={"Categories"}
        onClick={navigateTo}
      />
      <SidebarItem
        title={"Customer Reviews"}
        name={"Customer Reviews"}
        onClick={navigateTo}
      />
      <SidebarItem
        title={"All Artworks"}
        name={"All Artworks"}
        onClick={navigateTo}
      />
      <SidebarItem
        title={"Buy Sketches"}
        name={"Buy Sketches"}
        onClick={navigateTo}
      />
    </div>
  );
};
export default Sidebar;
