import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsGit } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

import styles from './Habilidades.module.css'
import { useState } from "react";

const Habilidades = ({ modoDL }) => {

  const [tituloTec, setTituloTec] = useState(undefined);
  const [paragrafoTec, setParagrafoTec] = useState(undefined);
  if(tituloTec === undefined){
    setTituloTec("{/*Passe o mouse ou click em algum dos icones...*/}")
  }

  return (
    <div className={modoDL === true ? styles.habilidadesD : styles.habilidades}>
      <div className={styles.tecnologias}>

        <FaHtml5 onMouseEnter={() => [setTituloTec("HTML"),setParagrafoTec("HyperText Markup Language(HTML), uma Linguagem que  permite fazer a estrutura de um site, onde o navegador vai entender aquele código e mostrar no browser, capaz de colocar videos, musicas, imagens e ETC. Sou capaz de criar ótimas páginas HTML com a sintaxe correta.")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconhtmlD : styles.iconhtml}/>

        <FaCss3Alt onMouseEnter={() => [setTituloTec("CSS"),setParagrafoTec("Cascading Style Sheet(CSS), Tecnologia que me capacita a dar estilos e animações legais a uma página HTML, ditando de estilos de fontes até animações e setando espacos entre os containers usando FlexBox.")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconcssD : styles.iconcss}/>

        <DiJavascript1 onMouseEnter={() => [setTituloTec("JavaScript"),setParagrafoTec("Tecnologia capaz de deixar a aplicações web dinâmica , sou capaz de criar e entender codigos com essa Linguagem, renderizações de : if else, for e while, funções, callBack, mapeamentos de dados, DOM, criacoes de animacoes com eventos ETC.")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconjsD : styles.iconjs}/>

      <FaReact onMouseEnter={() => [setTituloTec("React"),setParagrafoTec("ReactJS é uma FrameWork do JavaScript, que facilita a criação e o dinâmismo das páginas HTML, sou capaz de criar e entender codigos usando essa tecnologia, renderizando o JSX, CSS.module, Criação de páginas (SPA), State Lift, Hooks como UseState, React Router, React Icons ETC.")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconreactD : styles.iconreact}/>

      <BsGit onMouseEnter={() => [setTituloTec("Git"),setParagrafoTec("Git é uma tecnologia de versionamento de códigos, ele é usado para controlar o histórico de alterações de arquivos , onde eu edito meus projeto, faço commit para o GitHub, atualização de projetos ETC.")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconGitD : styles.iconGit}/>

      <BsGithub onMouseEnter={() => [setTituloTec("GitHub"),setParagrafoTec("GitHub é um repositório de dados compartilhados, onde eu posso depositas meus projetos criados, usando ele juntamento com o Git sou capaz de alterar códigos, fazer commit para o GitHub ETC.")]} onMouseLeave={() => [setTituloTec(undefined),setParagrafoTec(undefined)]} className={modoDL === true ? styles.iconGitHubD : styles.iconGitHub}/>
      </div>
        <span className={modoDL === true ? styles.textotecD : styles.textotec}>
            <h1>{tituloTec}</h1>
            <p>{paragrafoTec}  </p>
        </span>
    </div>
  )
}

export default Habilidades