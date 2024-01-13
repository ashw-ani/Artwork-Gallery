import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebarHandler = () => {
    setSidebar((prev) => !prev);
    console.log(sidebar);
  };
  return (
    <div className={styles.app}>
      <Header onClick={toggleSidebarHandler} />
      <Sidebar status={sidebar} />
    </div>
  );
}

export default App;
