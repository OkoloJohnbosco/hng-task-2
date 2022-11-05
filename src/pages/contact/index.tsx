import Button from "../../components/button";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import styles from "./contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.main_header}>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form className={styles.form_container}>
        <div className={styles.form_group_double}>
          <Input
            id="first_name"
            label="First name"
            placeholder="Enter your first name"
          />
          <Input
            id="last_name"
            label="Last name"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <Input
            id="email"
            label="Email"
            placeholder="yourname@gmail.com"
            type="email"
          />
        </div>
        <div>
          <Textarea
            id="message"
            label="Message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div>
          {/* <input
        type="checkbox"
        style={{ padding: "20px", color: "red", background: "red" }}
      /> */}
        </div>
        <div>
          <Button id="btn__submit">Send message</Button>
        </div>
      </form>
    </>
  );
}

export default Contact;
