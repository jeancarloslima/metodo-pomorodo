import { useState } from "react";
import "./contador-regressivo.css";

export default function ContadorRegressivo() {
    return (
        <div className="contador-container">
            <div className="modos-container">
                <button className="btn-foco">Foco</button>
                <button className="btn-descanso">Descanso</button>
            </div>
            <h2 className="tempo">25:00</h2>
            <button className="btn-controle-tempo">COMEÇAR</button>
        </div>
    )
}