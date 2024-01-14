import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
