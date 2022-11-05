import Button from "../../components/button";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_header}>
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form className={styles.form_container}>
          <div className={styles.form_group_double}>
            <Input label="First name" placeholder="Enter your first name" />
            <Input label="Last name" placeholder="Enter your last name" />
          </div>
          <div>
            <Input
              label="Email"
              placeholder="yourname@gmail.com"
              type="email"
            />
          </div>
          <div>
            <Textarea
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>
          <div>
            <Button>Send message</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;
