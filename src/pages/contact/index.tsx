import Button from "../../components/button";
import Input from "../../components/input";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_header}>
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <Input label="First Name" placeholder="Enter your first name" />
        <Button>Submit</Button>
      </main>
    </div>
  );
}

export default Contact;
