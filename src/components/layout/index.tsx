import Footer from "../footer";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
import { ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Outlet />
        {children}
      </main>

      <Footer />
    </div>
  );
}
