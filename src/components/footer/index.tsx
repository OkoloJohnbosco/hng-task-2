import zuriImg from "../../assets/images/zurin.svg";
import ingreImg from "../../assets/images/ingre.svg";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_zuri}>
        <img src={zuriImg} alt="" />
      </div>
      <div>
        <p>HNG Internship 9 Frontend Task</p>
      </div>
      <div className={styles.footer_ingre}>
        <img src={ingreImg} alt="" />
      </div>
    </div>
  );
}

export default Footer;
