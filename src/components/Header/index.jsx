import styles from "./header.module.scss" 
import logo from "../../assets/logo.png";

function Header(){
    return(
        <header className={styles.header}>
            <img className={styles.img} src={logo} alt="logo marca da pagina"/>
            <ul className={styles.listaNav}>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}
export default Header
//   header - tag
// Header componente funcional -logica