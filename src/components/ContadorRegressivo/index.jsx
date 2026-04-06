import "./contador-regressivo.css";
import { useContext, useEffect, useState, useRef } from "react";
import { DadosTemposContext } from "../../contexts/DadosTempoContext";

export default function ContadorRegressivo() {
  const { modo, setModo, tempoFoco, tempoDescanso } = useContext(DadosTemposContext);
  
  const [rodando, setRodando] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(tempoFoco * 60);

  const prevTemposRef = useRef({ foco: tempoFoco, descanso: tempoDescanso });

  useEffect(() => {
    const editouFoco = prevTemposRef.current.foco !== tempoFoco;
    const editouDescanso = prevTemposRef.current.descanso !== tempoDescanso;

    if (editouFoco || editouDescanso) {
      if (!rodando) {
        setTempoRestante((modo === "Foco" ? tempoFoco : tempoDescanso) * 60);
      }
      prevTemposRef.current = { foco: tempoFoco, descanso: tempoDescanso };
    }
  }, [tempoFoco, tempoDescanso, modo, rodando]);

  useEffect(() => {
    let intervalo;

    if (rodando) {
      intervalo = setInterval(() => {
        setTempoRestante((tempoAtual) => {
          if (tempoAtual <= 1) {
            clearInterval(intervalo);
            setRodando(false);
            return 0; 
          }
          return tempoAtual - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [rodando]);

  useEffect(() => {
    const min = String(Math.floor(tempoRestante / 60)).padStart(2, "0");
    const seg = String(tempoRestante % 60).padStart(2, "0");

    if (rodando) {
      document.title = `${modo}: ${min}:${seg}`;
    } else if (tempoRestante === 0) {
      document.title = "Fim do período!";
    } else {
      document.title = "Pomodoro";
    }
  }, [tempoRestante, rodando, modo]);

  const minutosExibicao = String(Math.floor(tempoRestante / 60)).padStart(2, "0");
  const segundosExibicao = String(tempoRestante % 60).padStart(2, "0");

  const trocarModo = (novoModo) => {
    if (modo === novoModo) return;
    
    setModo(novoModo);
    setRodando(false);
    
    setTempoRestante((novoModo === "Foco" ? tempoFoco : tempoDescanso) * 60);
  };

  return (
    <div className="contador-container">
      <div className="modos-container">
        <button
          onClick={() => trocarModo("Foco")}
          className={`btn-modo btn-foco ${modo === "Foco" ? "modo-ativo" : ""}`}
        >
          Foco
        </button>
        <button
          onClick={() => trocarModo("Descanso")}
          className={`btn-modo btn-descanso ${modo === "Descanso" ? "modo-ativo" : ""}`}
        >
          Descanso
        </button>
      </div>
      
      <h2 className="tempo">
        {minutosExibicao}:{segundosExibicao}
      </h2>

      {!rodando && tempoRestante > 0 && (
        <button onClick={() => setRodando(true)} className="btn-controle-tempo btn-comecar">
          COMEÇAR
        </button>
      )}

      {rodando && (
        <div className="botoes-controle">
          <button onClick={() => setRodando(false)} className="btn-controle-tempo btn-pausar">
            PAUSAR
          </button>
          <button
            onClick={() => {
              setRodando(false);
              setTempoRestante((modo === "Foco" ? tempoFoco : tempoDescanso) * 60);
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