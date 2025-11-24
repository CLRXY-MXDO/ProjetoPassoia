// aqui importamos os arquivos
import styles from "./App.module.scss"
import Banner from "./components/Banner";
import Header from "./components/Header"
import Lancamentos from "./components/Lancamentos"
import CardSection from "./components/CardsSection";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";
// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Banner />
      <CardSection />
      <Lancamentos />
      <Novidades />
      <Footer />
    </div>
  );
}
export default App