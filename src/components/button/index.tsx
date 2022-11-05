import styles from "./button.module.css";

function Button({
  children,
  type = "button",
  variant = "primary",
  id,
}: {
  children: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  id: string;
}) {
  return (
    <div className={styles.button_wrapper}>
      <button data-btn={variant} type={type} id={id}>
        {children}
      </button>
    </div>
  );
}

export default Button;
