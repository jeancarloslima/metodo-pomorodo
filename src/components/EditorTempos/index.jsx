import { useContext } from "react";
import { DadosTemposContext } from "../../contexts/DadosTempoContext";
import "./editor-tempos.css";

export default function EditorTempos() {
  const { tempoFoco, tempoDescanso, setTempoFoco, setTempoDescanso, setTempoAtualFoco, setTempoAtualDescanso } =
    useContext(DadosTemposContext);

  return (
    <div className="editor-tempos-container">
      <div className="container-foco">
        <span className="titulo-tempo">Tempo Foco:</span>
        <button
          onClick={() => {
            if (tempoFoco === 1) return;

            const novoTempo = tempoFoco - 1;

            setTempoFoco(novoTempo);
            setTempoAtualFoco(novoTempo);
            localStorage.setItem("tempo-foco", novoTempo);
          }}
          className="btn-controle btn-foco"
        >
          -
        </button>
        <h3 className="tempo-foco">{tempoFoco}</h3>
        <button
          onClick={() => {
            if (tempoFoco === 59) return;

            const novoTempo = tempoFoco + 1;

            setTempoFoco(novoTempo);
            setTempoAtualFoco(novoTempo);
            localStorage.setItem("tempo-foco", novoTempo);
          }}
          className="btn-controle btn-foco"
        >
          +
        </button>
      </div>

      <div className="container-descanso">
        <span className="titulo-tempo">Tempo Descanso:</span>
        <button
          onClick={() => {
            if (tempoDescanso === 1) return;

            const novoTempo = tempoDescanso - 1;

            setTempoDescanso(novoTempo);
            setTempoAtualDescanso(novoTempo);
            localStorage.setItem("tempo-descanso", novoTempo);
          }}
          className="btn-controle btn-descanso"
        >
          -
        </button>
        <h3 className="tempo-descanso">{tempoDescanso}</h3>
        <button
          onClick={() => {
            if (tempoDescanso === 59) return;

            const novoTempo = tempoDescanso + 1;

            setTempoDescanso(novoTempo);
            setTempoAtualDescanso(novoTempo);
            localStorage.setItem("tempo-descanso", novoTempo);
          }}
          className="btn-controle btn-descanso"
        >
          +
        </button>
      </div>
    </div>
  );
}
