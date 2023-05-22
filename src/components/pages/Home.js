import styles from './Home.module.css'
import minhaFoto from '../../images/WhatsApp_Image_2023-05-16_at_17.43.59-removebg-preview.png'
import meuNome from '../../images/WhatsApp_Image_2023-05-18_at_13.27.03-removebg-preview.png';
import meuNomewhite from '../../images/WhatsApp_Image_2023-05-16_at_13.31.02-removebg-preview.png'
const Home = ({ modoDL }) => {
  return (
    <div className={modoDL === true ? styles.HomeD : styles.Home}>
      <section className={modoDL === true ? styles.sectionD : styles.section} >
        <div className={styles.dados}>
          <h1>Oi, eu sou</h1>

          {/*img desktop*/}
          <div className={styles.digitandoMeuNome}>
            <img className={styles.meuNome} src={modoDL === true ? meuNomewhite : meuNome} alt=" meu nome" />
          </div>
          <div className={styles.cursor}>
          <div className={modoDL === true ? styles.digitandoD : styles.digitando}></div>
        </div>
        {/*img desktop*/}
        <img className={styles.meuNomeM} src={modoDL === true ? meuNomewhite : meuNome} alt=" meu nome" />
          <p>Desenvolvedor Front-End</p>
          <a href="https://www.linkedin.com/in/luan-fernandes-b5b602208/" target='_blank' rel='noreferrer'>
          Linkedin
          </a>
        </div>
      </section>
      <img className={styles.minhaFoto} src={minhaFoto} alt="minha foto" />
    </div>
  )
}

export default Home