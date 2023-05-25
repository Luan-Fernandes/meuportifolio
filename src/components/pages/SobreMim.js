import styles from './SobreMim.module.css';
import meuAvatar from '../../images/WhatsApp_Image_2023-05-16_at_13.29.59__4_-removebg-preview.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import curriculo from './currículoLuanFernandes.pdf'


const SobreMim = ({ modoDL }) => {
  return (
    <div className={modoDL === true ? styles.sobremimD : styles.sobremim}>
      <div className={styles.containertec}>
        <div className={styles.iconReact}><div><FaReact /></div></div>
        <div className={styles.containertec1}>
          <div className={styles.iconHtml}><div><FaHtml5 /></div></div>
          <img className={styles.meuAvatar} src={meuAvatar} alt="meu avatar" />
          <div className={styles.iconCss}><div><FaCss3Alt /></div></div>
        </div>
        <div className={styles.iconJs}><div><DiJavascript1 /></div></div>
      </div>
      <section className={modoDL === true ? styles.textSobreMimD : styles.textSobreMim}>
        <h1>Sobre Mim</h1>
        <div className={styles.curriculoM}>
          <span>Meu Curriculo</span>
          <div><FiDownload /></div>
          </div>
        <p>Meu nome é Luan Fernandes , e sou apaixonado por programação, Meu primeiro contato com programação foi em 2016 ,quando ainda estava no ensino médio. Apesar de ter gostado da área, só comecei a dar o devido foco em 2021, quando comecei minha graduação em Análise e Desenvolvimento de Sistemas.</p>
        <p> Hoje já sou graduado entendo tecnologia voltadas para o Front-end, Também amo criar projetos envolvendo tecnologias recém aprendidas.</p>
        <div className={styles.curriculo}>
          <span>Meu Curriculo</span>
          <div><a href={curriculo} download ><FiDownload /></a></div>
        </div>
      </section>

    </div>
  )
}

export default SobreMim