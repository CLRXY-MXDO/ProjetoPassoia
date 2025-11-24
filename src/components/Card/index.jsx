import styles from "./Card.module.scss"
function Card({img, Texto}){
    return(
        <div className={styles.card}>
            <img src={img} alt="" />
            <h1>{Texto}</h1>
        </div>
    )
}

export default Card