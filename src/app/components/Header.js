"use client"
import styles from "../page.module.css";
import Image from "next/image";
import foto from "../utils/MatiasMartinez.jpeg";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

export default function Header() {
   const [menuVisible, setMenuVisible] = useState(false);

   const handleToggle = (toggled) => {
       setMenuVisible(toggled);
   };

   const handleClose = () => {
       setMenuVisible(false);
   };

   let showMenu = false;

   

   if (window.innerWidth < 768) {
      showMenu = true;
  } else {
      showMenu = false;
  }

      const handleScroll = (event, id) => {
      event.preventDefault();
      const correccionPc = 130;
      const correccionMovil = 60;
      const correccion = window.innerWidth < 768 ? correccionMovil : correccionPc;
      const correcionFinal = window.innerWidth >= 768 && window.innerWidth < 1024 ? 20 : 80;
      const elemento = document.getElementById(id);
      const posicionElemento = elemento.getBoundingClientRect().top + window.scrollY;
      const correccionPosicion = posicionElemento - correccion - correcionFinal;
    
      window.scrollTo({
        top: correccionPosicion,
        behavior: 'smooth'
      });
    
      handleClose(); // Asegúrate de que handleClose esté definido
    
    };
      
   



    return (
    <header className={styles.header}>
       <div className={styles.fotonombre}>
       <Image src={foto} className={styles.imgheader} alt="fotodeperfil"/>
       <div className={styles.divheader}>
          <h1 className={styles.h1header}>Matias Martinez</h1>
          <h2 className={styles.h2header}>Desarrollador FullStack Java</h2>
       </div>
       </div>
       {showMenu && (
         <>
         <Hamburger size={30} onToggle={handleToggle} toggled={menuVisible} /> 
         {menuVisible && (
           <div className={styles.divMenuVisible}>
            <Hamburger label="Hide menu" onToggle={handleClose} color="#2f2c79" toggled={menuVisible}></Hamburger>
            <a className={styles.anavMenuVisible} href="#sobremi" onClick={(event) => handleScroll(event, "sobremi")}>SOBRE MI</a>
            <a className={styles.anavMenuVisible} href="#intereses" onClick={(event) => handleScroll(event, "intereses")}>INTERESES</a>
            <a className={styles.anavMenuVisible} href="#contactame" onClick={(event) => handleScroll(event, "contactame")}>CONTACTAME</a>
           </div>
         )}
         </>
       )}

       {!showMenu && (
         <div className={styles.divnav}>
            <a href="#sobremi" onClick={(event) => handleScroll(event, "sobremi")} className={styles.anav}>SOBRE MI</a>
            <a href="#intereses" onClick={(event) => handleScroll(event, "intereses")} className={styles.anav}>INTERESES</a>
            <a href="#contactame" onClick={(event) => handleScroll(event, "contactame")} className={styles.anav}>CONTACTAME</a>
         </div>
       )}
    </header>
    );
}