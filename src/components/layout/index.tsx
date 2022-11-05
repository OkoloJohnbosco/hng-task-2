import { ReactNode } from "react";
import Footer from "../footer";
import styles from "./layout.module.css";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}
