import Footer from "../footer";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
