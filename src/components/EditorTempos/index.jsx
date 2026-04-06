import { useContext } from "react";
import { DadosTemposContext } from "../../contexts/DadosTempoContext";
import "./editor-tempos.css";

export default function EditorTempos() {
  const { tempoFoco, tempoDescanso, setTempoFoco, setTempoDescanso } =
    useContext(DadosTemposContext);

  const alterarTempo = (tipo, operacao) => {
    if (tipo === "Foco") {
      const novoTempo = operacao === "+" ? tempoFoco + 1 : tempoFoco - 1;
      if (novoTempo >= 1 && novoTempo <= 59) {
        setTempoFoco(novoTempo);
        localStorage.setItem("tempo-foco", novoTempo);
      }
    } else {
      const novoTempo = operacao === "+" ? tempoDescanso + 1 : tempoDescanso - 1;
      if (novoTempo >= 1 && novoTempo <= 59) {
        setTempoDescanso(novoTempo);
        localStorage.setItem("tempo-descanso", novoTempo);
      }
    }
  };

  return (
    <div className="editor-tempos-container">
      <div className="container-foco">
        <span className="titulo-tempo">Tempo Foco:</span>
        <button onClick={() => alterarTempo("Foco", "-")} className="btn-controle btn-foco">-</button>
        <h3 className="tempo-foco">{tempoFoco}</h3>
        <button onClick={() => alterarTempo("Foco", "+")} className="btn-controle btn-foco">+</button>
      </div>

      <div className="container-descanso">
        <span className="titulo-tempo">Tempo Descanso:</span>
        <button onClick={() => alterarTempo("Descanso", "-")} className="btn-controle btn-descanso">-</button>
        <h3 className="tempo-descanso">{tempoDescanso}</h3>
        <button onClick={() => alterarTempo("Descanso", "+")} className="btn-controle btn-descanso">+</button>
      </div>
    </div>
  );
}