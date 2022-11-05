import styles from "./textarea.module.css";

function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className={styles.form_group}>
      <label>{label}</label>
      <textarea placeholder={placeholder} />
    </div>
  );
}

export default Textarea;
