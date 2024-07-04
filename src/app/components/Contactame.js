"use client"
import styles from "../page.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaLinkedin, FaGithub, FaWhatsapp  } from "react-icons/fa";


export default function Contactame() {

const [legendNombre, setLegendNombre] = useState("");
const [legendApellido, setLegendApellido] = useState("");
const [legendMail, setLegendMail] = useState("");
const [legendMensaje, setLegendMensaje] = useState("");
const [formularioContacto, setFormularioContacto] = useState({"nombre": "", "apellido": "", "mail": "", "mensaje": ""});

const handleFormulario = (event) => {
  setFormularioContacto({...formularioContacto, [event.target.name]: event.target.value});
}


const handleEnviar = (event) => {
  event.preventDefault();
  if (formularioContacto["nombre"] === "") {
    setLegendNombre("Por favor, complete este campo");
  } else {
    setLegendNombre("");
  }
  if (formularioContacto["apellido"] === "") {
    setLegendApellido("Por favor, complete este campo");
  } else {
    setLegendApellido("");
  }
  if (formularioContacto["mail"] === "" || formularioContacto["mail"].indexOf("@") === -1 || formularioContacto["mail"].indexOf(".com") === -1) {
    setLegendMail("Por favor, complete este campo con un email valido");
  } else {
    setLegendMail("");
  }
  if (formularioContacto["mensaje"] === "") {
    setLegendMensaje("Por favor, complete este campo");
  } else {
    setLegendMensaje("");
  }

  if (formularioContacto.nombre != "" && formularioContacto.apellido != "" && formularioContacto.mail != "" 
  && formularioContacto.mail.indexOf("@") != -1 && formularioContacto.mail.indexOf(".com") != -1 && formularioContacto.mensaje != "") {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Mensaje enviado con éxito",
      showConfirmButton: false,
      timer: 3000
    }).then(() => {
      location.reload();
    });
  
  }
}



    return (
        <div className={styles.divcontactame} id="contactame">
        <h1 className={styles.h1contactame} >Contáctame</h1>
        <form className={styles.formcontactame}>
          <label className={styles.labelcontactame}>Nombre
          <input type="text" name="nombre" id="input_nombre" className={styles.inputcontactame} onChange={handleFormulario} placeholder="Ingrese tu nombre..."></input>
          <legend className={styles.legendform} >{legendNombre}</legend>
          </label>
          <label className={styles.labelcontactame}>Apellido
          <input type="text" id="input_apellido" name="apellido" className={styles.inputcontactame} onChange={handleFormulario} placeholder="Ingrese tu apellido..."></input>
          <legend className={styles.legendform} >{legendApellido}</legend>
          </label>
          <label className={styles.labelcontactame}>Mail
          <input type="text" id="input_mail" name="mail" className={styles.inputcontactame} onChange={handleFormulario} placeholder="Ingrese tu mail..."></input>
          <legend className={styles.legendform} >{legendMail}</legend>
          </label>
          <label className={styles.labelcontactame}>Mensaje
          <textarea id="input_mensaje" name="mensaje" className={styles.textareacontactame} onChange={handleFormulario} placeholder="Ingrese el mensaje..."></textarea>
          <legend className={styles.legendform}>{legendMensaje}</legend>
          </label>
          <button className={styles.buttoncontactame} onClick={handleEnviar}>ENVIAR</button>
        </form>
        <div className={styles.divOtrasFormas}>
          <h1 className={styles.h1redes} >Otras redes</h1>
          <div className={styles.divredes}>
            <a href="https://www.linkedin.com/in/matias-martinez-0b8b40274/" className={styles.redes} target="_blank"><FaLinkedin size={50} color="#0c184e" /></a>
            <a href="https://github.com/matimartinez01" className={styles.redes} target="_blank"><FaGithub size={50} color="#0c184e" /></a>
            <a href="https://wa.me/543512630360" className={styles.redes} target="_blank"><FaWhatsapp size={50} color="#0c184e" /></a>
          </div>
        </div>
      </div>
    )
}