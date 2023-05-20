import styles from './NavBar.module.css';
import imgLogo from '../../images/Prancheta_1_cópia-1-removebg-preview.png';
import imgLogoB from '../../images/WhatsApp_Image_2023-05-16_at_13.29.59__2_-removebg-preview.png'
import iconSol from '../../images/sol.png'
import iconLua from '../../images/lua.png'
import { FaAngleDoubleRight } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ modoDL, setModoDL }) => {
     const history = useNavigate();
     const [step, setStep] = useState(1);
     const marcador = () => {
        if(step === 1){
            return <FaAngleDoubleRight className={styles.selecthome}/>
        }else if(step === 2){
            return <FaAngleDoubleRight className={styles.selectsobremim}/>
        }else if(step === 3){
            return <FaAngleDoubleRight className={styles.selectprojetos}/>
        }else if(step === 4){
            return <FaAngleDoubleRight className={styles.selecthabilidades}/>
        }else{
            return null
        }
     }
    return (
        <div className={styles.topo}>
            <header className={styles.desktop}>
                <img className={styles.logo} src={modoDL === true ? imgLogoB : imgLogo } alt="Logo" />
                <nav>
                    <ul className={modoDL === true ? styles.navBarD : styles.navBar}>
                    {marcador()}
                        <li onClick={() => [history("/",setStep(1))]}>Home</li>
                        <li onClick={() => [history("/sobremim"),setStep(2)]}>Sobre Mim</li>
                        <li onClick={() => [history("/projetos"), setStep(3)]}>Projetos</li>
                        <li onClick={() => [history("/habilidades"),setStep(4)]}>Habilidades</li>
                    </ul>
                </nav>
                <div onClick={() => setModoDL(!modoDL)} className={modoDL === true ? styles.modosLDActive: styles.modosLD}>
                    <div></div>
                    <section className={modoDL === true ? styles.SolLuaD : styles.SolLua}><img className={styles.iconLuaSol} src={modoDL ===true ? iconSol : iconLua } alt="Lua e Sol" /></section>
                </div>
            </header>

            <header className={modoDL === true ? styles.mobileD : styles.mobile}>
                <nav>
                <img className={styles.logomobile} src={modoDL === true ? imgLogoB : imgLogo } alt="Logo" />
                    <ul className={modoDL === true ? styles.navBarMD : styles.navBarM}>
                        <li className={step === 1 ? styles.selecionado : undefined} onClick={() => [history("/",setStep(1))]}>Home</li>
                        <li onClick={() => [history("/sobremim"),setStep(2)]}>Sobre Mim</li>
                        <li onClick={() => [history("/projetos"), setStep(3)]}>Projetos</li>
                        <li onClick={() => [history("/habilidades"),setStep(4)]}>Habilidades</li>
                    </ul>
                    <div id={styles.modosmobile} onClick={() => setModoDL(!modoDL)} className={modoDL === true ? styles.modosLDActive: styles.modosLD}>
                    <div></div>
                    <section className={modoDL === true ? styles.SolLuaD : styles.SolLua}><img className={styles.iconLuaSol} src={modoDL ===true ? iconSol : iconLua } alt="Lua e Sol" /></section>
                </div>
                </nav>
            </header>
            
        </div>
    )
}

export default NavBar;