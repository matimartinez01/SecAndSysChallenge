"use client"
import styles from "../page.module.css";
import { Slide } from "react-awesome-reveal";



export default function Intereses() {
    return (
        <div className={styles.intereses} id="intereses" >
            <h1 className={styles.interesesh1} >INTERESES PROFESIONALES</h1>
            <div className={styles.divintereses}>
                <Slide className={styles.animacionIntereses}><p className={styles.interesesp}>Desarrollo Frontend</p></Slide>
                <Slide className={styles.animacionIntereses}><p className={styles.interesesp}>Desarrollo Backend</p></Slide>
                <Slide className={styles.animacionIntereses}><p className={styles.interesesp}>Resolver problemas</p></Slide>
                <Slide className={styles.animacionIntereses}><p className={styles.interesesp}>Desafíos</p></Slide>
                <Slide className={styles.animacionIntereses}><p className={styles.interesesp}>Crecer profesionalmente</p></Slide>
                <Slide className={styles.animacionIntereses}><p className={styles.interesesp}>Continuar aprendiendo</p></Slide>
            </div>
            <h1 className={styles.interesesh1}>HOBIES</h1>
            <div className={styles.divintereses}>
                <Slide className={styles.animacionIntereses} direction="right"><p className={styles.interesesp}>Fútbol</p></Slide>
                <Slide className={styles.animacionIntereses} direction="right"><p className={styles.interesesp}>Cocina</p></Slide>
                <Slide className={styles.animacionIntereses} direction="right"><p className={styles.interesesp}>Amigos</p></Slide>
                <Slide className={styles.animacionIntereses} direction="right"><p className={styles.interesesp}>Películas</p></Slide>
                <Slide className={styles.animacionIntereses} direction="right"><p className={styles.interesesp}>Videojuegos</p></Slide>
                <Slide className={styles.animacionIntereses} direction="right"><p className={styles.interesesp}>Deportes</p></Slide>
            </div>
        </div>
    )
}