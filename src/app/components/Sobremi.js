"use client"
import styles from "../page.module.css";

import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiSpring, SiPostgresql  } from "react-icons/si";
import { Fade } from "react-awesome-reveal";

export default function Sobremi() {
    return(
        <div className={styles.sobremi} id="sobremi">

          <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <h1 className={styles.h1sobremi}>SOBRE MI</h1>
          </div>

          <div className={styles.divpsobremi}>
            <p className={styles.psobremi}>✔️ Tengo 22 años</p>
            <p className={styles.psobremi}>📍&nbsp;&nbsp; Vivo en Córdoba</p>
            <p className={styles.psobremi}>🖥️ Soy Desarrollador Web FullStack</p>
            <p className={styles.psobremi}>🚀 Experiencia trabajando con: </p>
            <div className={styles.divexperiencia}> 
              <Fade className={styles.animacionLogo}><FaHtml5 color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={100}><IoLogoJavascript color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={200}><FaCss3Alt color="#0c184e" className={styles.experiencialogo} /></Fade>
              <Fade className={styles.animacionLogo} delay={300}><FaReact color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={400}><SiRedux color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={500}><FaJava color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={600}><SiSpring color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={700}><SiPostgresql color="#0c184e" className={styles.experiencialogo}/></Fade>
              <Fade className={styles.animacionLogo} delay={800}><FaGithub color="#0c184e" className={styles.experiencialogo}/></Fade>
            </div>
          </div>

        </div>
    )
}