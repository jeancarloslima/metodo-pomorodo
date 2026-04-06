import "./lsita-tarefas.css";
import { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function ListaTarefas() {
  const [criandoTarefa, setCriandoTarefa] = useState(false);
  
  const [listaTarefas, setListaTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("lista-tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  
  const inputRef = useRef(null);

  function handleCriaTarefa() {
    const valor = inputRef.current.value;

    if (valor.trim() !== "") {
      const listaAtualizada = [...listaTarefas, { id: Date.now(), texto: valor }];

      setListaTarefas(listaAtualizada);
      localStorage.setItem("lista-tarefas", JSON.stringify(listaAtualizada));

      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  function handleDeletaTarefa(idParaDeletar) {
    const listaAtualizada = listaTarefas.filter((item) => item.id !== idParaDeletar);
    setListaTarefas(listaAtualizada);
    localStorage.setItem("lista-tarefas", JSON.stringify(listaAtualizada));
  }

  return (
    <div className="lista-tarefas-container">
      <h2 className="titulo-tarefas">Tarefas</h2>
      <ul className="lista-tarefas">
        {listaTarefas.map((item) => (
          <li className="item-tarefa" key={item.id}>
            <span className="texto-tarefa">{item.texto}</span>
            <button onClick={() => handleDeletaTarefa(item.id)} className="btn-excluir-tarefa">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      
      {!criandoTarefa ? (
        <button onClick={() => setCriandoTarefa(true)} className="btn-add-tarefa">
          + Adicionar Tarefa
        </button>
      ) : (
        <div className="cria-tarefa-container">
          <input
            ref={inputRef}
            type="text"
            name="tarefa"
            id="tarefa" 
            maxLength={window.innerWidth < 550 ? "30" : "50"}
            autoFocus
          />
          <div className="botoes-criar-tarefa">
            <button onClick={() => setCriandoTarefa(false)} className="btn-tarefa btn-cancela-tarefa">
              Cancelar
            </button>
            <button onClick={handleCriaTarefa} className="btn-tarefa btn-salva-tarefa">
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}