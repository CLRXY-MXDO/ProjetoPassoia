import banner from "../../assets/Novidades/banner.jpg"
import styles from "./Novidades.module.scss"
export default function Novidades() {
    return (
        <div className={styles.novidades}>
            <h1>NOVIDADES PARA VOCÊ</h1>
            <img src={banner} alt="" />
        </div>
    )
}