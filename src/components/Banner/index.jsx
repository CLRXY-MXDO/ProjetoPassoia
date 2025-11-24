import banner from "../../assets/Banner/Banner.jpg"
import styles from "./banner.module.scss"
function Banner(){
    return(
       <>
       <img src={banner} className={styles.banner}/>
       </>
    )
}
export default Banner