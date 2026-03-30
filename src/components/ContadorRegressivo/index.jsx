import "./contador-regressivo.css";
import { useContext, useEffect, useState } from "react";
import { DadosTemposContext } from "../../contexts/DadosTempoContext";

export default function ContadorRegressivo() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);
  const {
    modo,
    tempoFoco,
    tempoDescanso,
    tempoAtualFoco,
    tempoAtualDescanso,
    setModo,
    setTempoAtualFoco,
    setTempoAtualDescanso,
  } = useContext(DadosTemposContext);

  useEffect(() => {
    let intervalo;

    if (rodando) {
      intervalo = setInterval(() => {
        if (segundos > 0) {
          setSegundos((segundosAtuais) => segundosAtuais - 1);
        } else {
          if (modo === "Foco") {
            setTempoAtualFoco((tempoAtual) => tempoAtual - 1);
          } else {
            setTempoAtualDescanso((tempoAtual) => tempoAtual - 1);
          }
          setSegundos(59);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  });

  return (
    <div className="contador-container">
      <div className="modos-container">
        <button
          onClick={() => {
            setModo("Foco");
            setTempoAtualFoco(tempoFoco);
            setSegundos(0);
            setRodando(false);
          }}
          className={`btn-modo btn-foco ${modo === "Foco" ? "modo-ativo" : ""}`}
        >
          Foco
        </button>
        <button
          onClick={() => {
            setModo("Descanso");
            setTempoAtualDescanso(tempoDescanso);
            setSegundos(0);
            setRodando(false);
          }}
          className={`btn-modo btn-descanso ${modo === "Descanso" ? "modo-ativo" : ""}`}
        >
          Descanso
        </button>
      </div>
      <h2 className="tempo">
        {modo === "Foco" &&
          `${tempoAtualFoco}:${segundos >= 10 ? segundos : "0" + segundos}`}
        {modo === "Descanso" &&
          `${tempoAtualDescanso}:${segundos >= 10 ? segundos : "0" + segundos}`}
      </h2>
      {!rodando && (
        <button
          onClick={() => setRodando(true)}
          className="btn-controle-tempo btn-comecar"
        >
          COMEÇAR
        </button>
      )}
      {rodando && (
        <div className="botoes-controle">
          <button
            onClick={() => {
              setRodando(false);
            }}
            className="btn-controle-tempo btn-pausar"
          >
            PAUSAR
          </button>
          <button
            onClick={() => {
              setRodando(false);

              if (modo === "Foco") {
                setTempoAtualFoco(tempoFoco);
              } else {
                setTempoAtualDescanso(tempoDescanso);
              }

              setSegundos(0);
            }}
            className="btn-controle-tempo btn-reiniciar"
          >
            REINICIAR
          </button>
        </div>
      )}
    </div>
  );
}
