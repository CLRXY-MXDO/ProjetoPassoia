// hooks funcoes especiais do react;
// useStae controla os estados de algo na interface
import { useState } from "react";
import styles from "./lancamento.module.scss"
import vermelho from "../../assets/Lancamentos/btn/vermelho.png";
import azul from "../../assets/Lancamentos/btn/azul.png";
import marrom from "../../assets/Lancamentos/btn/marrom.png";
import base from "../../assets/Lancamentos/btn/base.png";
import kit1 from "../../assets/Lancamentos/kit1.png"
import kit2 from "../../assets/Lancamentos/kit2.png"
import kit3 from "../../assets/Lancamentos/kit3.png"
import estrela from "../../assets/Lancamentos/estrelas.png"
function Lancamentos() {

    //cor a variavel inicial, setCor a função atualizadora
    const [cor, setCor] = useState(vermelho);

    return (
        <section className={styles.lancamentos}>
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
            <div>

                <div className={styles.container}>
                    <div className={styles.Kits}>
                        <img src={kit1} />
                        <img src={kit2} />
                        <img src={kit3} />
                    </div>
                    <img src={cor} alt="" />

                    <div className={styles.texto}>
                        <img src={estrela} alt="" />
                        <h1>Matte Premium</h1>
                        <h6>Cores disponíveis</h6>
                        <div className={styles.cor}>
                            <button className={styles.azul} onClick={() => setCor(azul)}></button>
                            <button className={styles.vermelho} onClick={() => setCor(vermelho)}></button>
                            <button className={styles.marrom} onClick={() => setCor(marrom)}></button>
                            <button className={styles.base} onClick={() => setCor(base)}></button>
                        </div>
                        <h2>Descrição</h2>
                        <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio.
                            Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                    </div>

                </div>
            </div>


        </section>
    );
}

export default Lancamentos;