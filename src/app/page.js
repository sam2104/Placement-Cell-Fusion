import Image from "next/image";
import styles from "./page.module.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Header />
        </div>
      </div>
    </main>
  );
}
