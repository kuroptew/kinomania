import { Link } from "react-router-dom";

import logo from "@assets/img/logo/logo120.png";

import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="logo" className={styles.img}/>
      <span className={styles.name}>Киномания</span>
    </Link>
  )
};

export default Logo;