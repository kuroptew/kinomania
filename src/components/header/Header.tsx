import Logo from "@components/logo/Logo"
import SingIn from "@components/singIn/SingIn";
import SearchMovies from "@components/searchMovies/SearchMovies";


import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo/>
          <SearchMovies/>
          <SingIn handleSingIn={()=>{console.log("Войти");
          }}/>
        </div>
      </div>
    </header>
  )
};

export default Header;