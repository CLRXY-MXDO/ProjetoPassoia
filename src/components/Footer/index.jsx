import styles from "./Footer.module.scss"

import boleto from "../../assets/Footer/Pagamentos/boleto.png"
import mastercard from "../../assets/Footer/Pagamentos/mastercard.png"
import visa from "../../assets/Footer/Pagamentos/visa.png"
import pix from "../../assets/Footer/Pagamentos/pix.png"

import face from "../../assets/Footer/Redes/face.png"
import insta from "../../assets/Footer/Redes/inst.png"
import twitter from "../../assets/Footer/Redes/twt.png"
import youtube from "../../assets/Footer/Redes/ytb.png"

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.container1}>
                <h2>ATENDIMENTO</h2>
                <p>Fale Conosco</p>
                <p>Perguntas Frequentes</p>
                <p>Meus Pedidos</p>
                <p>Nossas Lojas</p>
            </div>
            <div className={styles.container2}>
                <h2>FORMAS DE PAGAMENTO</h2>
                <div className={styles.pagamentos}>
                    <img src={boleto} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={visa} alt="" />
                    <img src={pix} alt="" />
                </div>
            </div>
            <div className={styles.container3}>
                <h2>SIGA-NOS NAS REDES SOCIAIS</h2>
                <div className={styles.redes}>
                    <img src={insta} alt="" />
                    <img src={face} alt="" />
                    <img src={youtube} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>
    )
}