import logo from "@assets/img/logo/logo 120.png";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <img src={logo} alt="logo" className={styles.img}/>
      <span className={styles.name}>Киномания</span>
    </a>
  )
};

export default Logo;