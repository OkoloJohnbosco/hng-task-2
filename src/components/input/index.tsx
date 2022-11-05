import styles from "./input.module.css";

function Input({
  label,
  type = "text",
  placeholder,
  id,
}: {
  label: string;
  type?: string;
  placeholder: string;
  id: string;
}) {
  return (
    <div className={styles.form_group}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} placeholder={placeholder} id={id} />
    </div>
  );
}

export default Input;
