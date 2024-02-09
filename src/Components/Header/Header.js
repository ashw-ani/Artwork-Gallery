import sidepanelContext from "../../context/sidepanelContext";
import styles from "./Header.module.css";
import { useContext } from "react";

const Header = (props) => {
  const sidebarctx = useContext(sidepanelContext);

  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Artrwork Gallery</h1>
      <div
        className={`${
          sidebarctx.sidepanelStatus ? styles.hamactive : styles.ham
        }`}
        onClick={sidebarctx.toggleSidepanel}
      >
        <div
          className={`${styles.bar} ${
            sidebarctx.sidepanelStatus && styles.bar1
          }`}
        ></div>
        {!sidebarctx.sidepanelStatus && (
          <div className={`${styles.bar} `}></div>
        )}

        <div
          className={`${styles.bar} ${
            sidebarctx.sidepanelStatus && styles.bar3
          }`}
        ></div>
      </div>
    </div>
  );
};
export default Header;
