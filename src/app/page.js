import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header";
import Sobremi from "./components/Sobremi";
import Intereses from "./components/Intereses";
import Contactame from "./components/Contactame";



export default function Home() {
  return (
    <div className={styles.div}>
      <Header />
      <main className={styles.main}>
        <Sobremi />
        <Intereses />
        <Contactame />
      

      </main>
    </div>
  );
}
