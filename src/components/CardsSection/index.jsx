import styles from "./cardSection.module.scss"
import Card from "../Card"
import Card1 from "../../assets/Card/Card1.png"
import Card2 from "../../assets/Card/Card2.jpg"
import Card3 from "../../assets/Card/Card3.png"
import Card4 from "../../assets/Card/Card4.png"
const Cards = [
    {img: Card1, Texto: "LÁBIOS"},
    {img: Card2, Texto: "OLHOS"},
    {img: Card3, Texto: "ROSTO"},
    {img: Card4, Texto: "TENDÊNCIA"}
]

function CardSection(){
    return(
    <div className={styles.cardsSection}>
        <h1>LOOKS E DICAS DE MAQUIAGEM</h1>
        <div className={styles.cards}>
            {Cards.map((i, index)=>{
                return <Card key={index} img={i.img} Texto={i.Texto}/>
            })}
        </div>
    </div>
    )
}
export default CardSection