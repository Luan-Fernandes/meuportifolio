import styles from './Projetos.module.css';
import imgHome from '../../images/homepage.png';
import imgCard from '../../images/cardprint.png';
import imgMult from '../../images/mult.png';
import gifhome from '../../images/homegif.gif';
import gifcar from '../../images/cardgif.gif';
import gifmulti from '../../images/multigif.gif';
import { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import avatar from "../../images/WhatsApp_Image_2023-05-16_at_13.29.59__4_-removebg-preview.png"
const Projetos = ({ modoDL }) => {
  const [acaoP1, setAcaop1] = useState(false);
  const [acaoP2, setAcaop2] = useState(false);
  const [acaoP3, setAcaop3] = useState(false);
  return (
    <div className={modoDL === true ? styles.projetosD: styles.projetos}>
      <figure className={styles.emdev}><img src={avatar} alt="" /></figure>
      <p className={modoDL === true ? styles.p: styles.pD}>Em desenvolvimento...</p>
      {/*<section className={styles.meusProjetos}>

      <div className={modoDL === true ? styles.Projeto1D : styles.Projeto1}>
          <div className={acaoP1 === true ? styles.descrisao1true : styles.descrisao1}>
            <p >Esse projeto é uma Home Page , que trabalha com as tecnologias HTML 5 e Css3 ,utilizando Flex Box e respansividade, incluindo também Java Script e adapitado para modo mobile.</p>
            </div>
           
            <img onClick={() => setAcaop1(!acaoP1)} onMouseLeave={() => setAcaop1(false)} onMouseEnter={() => setAcaop1(true)} className={styles.img1} src={acaoP1 === true ? gifhome : imgHome} alt="primeiro projeto" />
            <a  target='_blank' rel='noreferrer' className={styles.linkPM} href="">Link do projeto</a>
      </div>

      <div  className={modoDL === true ? styles.Projeto2D : styles.Projeto2}>
      <div className={acaoP2 === true ? styles.descrisao2true : styles.descrisao2}>
            <p >Esse projeto simula um preenchimento de dados de cartão de um usuário, usando as tecnologias HTML5 e Css3 ,aplicado com Flexbox , estilização de formulários e Java Script ,também trabalhado com DOM ,utilizando dados do imput para impressão e validação do mesmo.</p>
            </div>
            <img onClick={() => setAcaop2(!acaoP2)} onMouseLeave={() => setAcaop2(false)} onMouseEnter={() => setAcaop2(true)} className={styles.img2} src={acaoP2 === true ? gifcar : imgCard} alt="projeto Card"/>
            <a  target='_blank' rel='noreferrer' className={styles.linkPM2} href="">Link do projeto</a>
           
      </div>

      <div className={modoDL === true ? styles.Projeto3D : styles.Projeto3}>
      <div className={acaoP3 === true ? styles.descrisao3true : styles.descrisao3}>
            <p >Esse projeto simula um Multi step. Trabalhado com as tecnologias do React, Css module app responsivo, JSX e JS. O projeto é uma SPA ( Sigle Page Aplication), utilizando hooks, React router e também UseState, para a validação dos dados.</p>
            </div>
            <img onClick={() => setAcaop3(!acaoP3)} onMouseLeave={() => setAcaop3(false)} onMouseEnter={() => setAcaop3(true)} className={styles.img3} src={acaoP3 === true ? gifmulti : imgMult} alt=""/>
            <a  target='_blank' rel='noreferrer' className={styles.linkPM} href="">Link do projeto</a>
      </div>
      </section>
      <div className={styles.LinkGit}>
      <span>GitHub</span>
      <abbr title="Link do GitHub"><a href="https://github.com/Luan-Fernandes" target='_blank' rel='noreferrer'><BsGithub/></a></abbr>
      </div>
      */}
    </div>
  )
}

export default Projetos