import styles from "./textarea.module.css";

function Textarea({
  label,
  placeholder,
  id,
}: {
  label: string;
  placeholder: string;
  id: string;
}) {
  return (
    <div className={styles.form_group}>
      <label>{label}</label>
      <textarea placeholder={placeholder} id={id} />
    </div>
  );
}

export default Textarea;
