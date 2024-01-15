import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Categories from "./Pages/Categories/Categories";
import { useContext } from "react";
import sidepanelContext from "./context/sidepanelContext";

function App() {
  const sidebarctx = useContext(sidepanelContext);
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <div className={styles.main} onClick={sidebarctx.closeSidebar}>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/customer reviews" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
