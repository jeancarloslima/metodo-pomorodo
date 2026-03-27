import { useState } from "react";
import "./contador-regressivo.css";

export default function ContadorRegressivo() {
    const [modo, setModo] = useState("Foco");

    return (
        <div className="contador-container">
            <div className="modos-container">
                <button className={`btn-modo btn-foco ${modo === "Foco" ? "modo-ativo" : ""}`}>Foco</button>
                <button className={`btn-modo btn-descanso ${modo === "Descanso" ? "modo-ativo" : ""}`}>Descanso</button>
            </div>
            <h2 className="tempo">25:00</h2>
            <button className="btn-controle-tempo">COMEÇAR</button>
        </div>
    )
}