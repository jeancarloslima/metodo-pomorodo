import "./App.css";
import ContadorRegressivo from "./components/ContadorRegressivo";
import EditorTempos from "./components/EditorTempos";
import ListaTarefas from "./components/ListaTarefas";
import { useState } from "react";
import { GiTomato } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { DadosTemposContext } from "./contexts/DadosTempoContext";

function App() {
  const [modo, setModo] = useState("Foco");
  const [editando, setEditando] = useState(false);
  const [tempoFoco, setTempoFoco] = useState(
    Number(localStorage.getItem("tempo-foco")) || 25
  );
  const [tempoDescanso, setTempoDescanso] = useState(
    Number(localStorage.getItem("tempo-descanso")) || 5
  );

  return (
    <DadosTemposContext.Provider
      value={{
        modo,
        setModo,
        tempoFoco,
        setTempoFoco,
        tempoDescanso,
        setTempoDescanso,
      }}
    >
      <div id="app">
        <header>
          <div id="header-container">
            <h1 id="titulo">
              Pomodor
              <GiTomato />
            </h1>
            <button
              onClick={() => setEditando(!editando)}
              className="btn-editar-tempos"
            >
              <IoSettingsSharp />
            </button>
            {editando && <EditorTempos />}
          </div>
        </header>

        <main>
          <div id="main-container">
            <ContadorRegressivo />
            <ListaTarefas />
          </div>
        </main>
      </div>
    </DadosTemposContext.Provider>
  );
}

export default App;