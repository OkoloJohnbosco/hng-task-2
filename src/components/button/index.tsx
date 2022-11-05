import styles from "./button.module.css";

function Button({
  children,
  type = "button",
}: {
  children: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <div className={styles.form_group}>
      <button type={type}>{children}</button>
    </div>
  );
}

export default Button;
