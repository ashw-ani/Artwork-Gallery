import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  // const [sidebar, setSidebar] = useState(false);
  // const toggleSidebarHandler = () => {
  //   setSidebar((prev) => !prev);
  //   console.log(sidebar);
  // };

  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
