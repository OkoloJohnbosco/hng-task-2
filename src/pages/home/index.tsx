import Link, { links } from "../../components/link";
import styles from "./home.module.css";
import ingreImg from "../../assets/images/profile.jpg";
import slackImg from "../../assets/images/slack.svg";
import gitImg from "../../assets/images/git.svg";
import { AiOutlineCamera } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <section className={styles.main_profile}>
        <button className={styles.main_profile_menu}>
          <IoMdShareAlt fontSize="24px" fontWeight="bold" />
          <BsThreeDots fontSize="24px" fontWeight="bold" />
        </button>
        <div tabIndex={1}>
          <img src={ingreImg} alt="" id="profile__img" />
          <div>
            <AiOutlineCamera color="white" fontSize="24px" fontWeight="bold" />
          </div>
        </div>

        <p id="twitter">Okolo Johnbosco</p>
        <p id="slack">Okolo Johnbosco</p>
      </section>
      <div className={styles.main_link}>
        {links.map((link) => (
          <Link id={link.id} key={link.id} href={link.href}>
            {link.subText}
          </Link>
        ))}
      </div>
      <div className={styles.main_last}>
        <a href="/#">
          <img src={slackImg} alt="slack icon" />
        </a>
        <a
          href="https://github.com/OkoloJohnbosco/HNG-task-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitImg} alt="github icon" />
        </a>
      </div>
    </>
  );
}
