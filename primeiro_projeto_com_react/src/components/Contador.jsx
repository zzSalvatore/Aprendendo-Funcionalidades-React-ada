import { useState } from "react";
import styles from './button.module.css';

export default function Contador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

    return (
        <div className="container">
            <h1 className="title">Contador</h1>
            <h4>Estados e Eventos</h4>
            <p className="contador">{contador}</p>
            {contador > 9 ? <p>Número muito alto, diminua!</p> : <button className={styles.myButton} onClick={aumentar}>Aumentar</button>}
            <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
        </div>

    )
}


