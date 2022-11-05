import { ReactNode } from "react";
import styles from "./link.module.css";
import { Link as NavLink } from "react-router-dom";

function Link({
  id,
  href,
  children,
  isExternal = true,
}: {
  id: string;
  href: string;
  children: ReactNode;
  isExternal?: boolean;
}) {
  if (!isExternal) {
    return (
      <NavLink id={id} to={href} className={styles.link}>
        <div>
          <span>{children}</span>
        </div>
      </NavLink>
    );
  }
  return (
    <a
      id={id}
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <span>{children}</span>
      </div>
    </a>
  );
}

export default Link;
