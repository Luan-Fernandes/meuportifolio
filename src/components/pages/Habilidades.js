import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs"

import styles from './Habilidades.module.css'
import { useState } from "react";

const Habilidades = ({ modoDL }) => {

  const [tituloTec, setTituloTec] = useState(undefined);
  const [paragrafoTec, setParagrafoTec] = useState(undefined);
  if(tituloTec === undefined){
    setTituloTec("Passe o mouse ou click em algum dos icones...")
  }

  return (
    <div className={modoDL === true ? styles.habilidadesD : styles.habilidades}>
      <div className={styles.tecnologias}>

        <FaHtml5 onClick={() => [setTituloTec("html"),setParagrafoTec("texto do HTML")]} onMouseEnter={() => [setTituloTec("html"),setParagrafoTec("texto do HTML")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconhtmlD : styles.iconhtml}/>

        <FaCss3Alt onMouseEnter={() => [setTituloTec("Css"),setParagrafoTec("texto do Css")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconcssD : styles.iconcss}/>

        <DiJavascript1 onMouseEnter={() => [setTituloTec("JavaScript"),setParagrafoTec("texto do JS")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconjsD : styles.iconjs}/>

      <FaReact onMouseEnter={() => [setTituloTec("React"),setParagrafoTec("texto do react")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconreactD : styles.iconreact}/>

      <BsGit onMouseEnter={() => [setTituloTec("Git"),setParagrafoTec("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias sunt, aliquid earum ad nostrum distinctio. Ab maxime facere quibusdam nobis cupiditate repudiandae aspernatur sunt enim, in optio recusandae natus!")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconGitD : styles.iconGit}/>
      </div>
        <span className={modoDL === true ? styles.textotecD : styles.textotec}>
            <h1>{tituloTec}</h1>
            <p>{paragrafoTec}  </p>
        </span>
    </div>
  )
}

export default Habilidades