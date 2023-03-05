import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.containerContact}>
        <p className={styles.contactHeader}>
          Contact<span className={styles.infoGrad}> Info</span>
        </p>
        <div className={styles.credInfo}>
          <p className={styles.credItems}>
            Address
            <span className={styles.credText}>
              National Institute of Technology Silchar Cachar, Assam
            </span>
          </p>
          <p className={styles.credItems}>
            Website<span className={styles.credText}>www.nits.ac.in</span>
          </p>
          <p className={styles.credItems}>
            Email<span className={styles.credText}>xxxx@xxx.com</span>
          </p>
          <p className={styles.credItemsphone}>
            Phone Number<span className={styles.credText}>+91-xxxxxxxxxx</span>
          </p>
          <p className={styles.credItemsmobile}>
            Phone No.<span className={styles.credText}>+91-xxxxxxxxxx</span>
          </p>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <p className={styles.footerDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, purus tincidunt
          tellus eros. Feugiat velit id sed sit id velit, adipiscing pulvinar orci. Et,
          bibendum nibh pellentesque id sagittis adipiscing lorem. Elit egestas bibendum
          morbi vitae, nullam nunc sagittis eget.
        </p>
        <div className={styles.iconSection}>
          <a
            href="https://www.facebook.com/srijan.nits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className={styles.facebookIcon} />
          </a>
          <a
            href="https://www.instagram.com/srijan_nits/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className={styles.instaIcon} />
          </a>
          <a
            href="https://www.linkedin.com/company/srijan-nit-silchar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className={styles.linkedinIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
