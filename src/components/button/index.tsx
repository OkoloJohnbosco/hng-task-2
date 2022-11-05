import styles from "./button.module.css";

function Button({
  children,
  type = "button",
  variant = "primary",
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}) {
  return (
    <div className={styles.button_wrapper}>
      <button data-btn={variant} type={type}>
        {children}
      </button>
    </div>
  );
}

export default Button;
