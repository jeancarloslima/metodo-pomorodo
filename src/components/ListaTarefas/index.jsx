import { useRef, useState } from "react";
import "./lsita-tarefas.css";

export default function ListaTarefas() {
  const [criandoTarefa, setCriandoTarefa] = useState(false);
  const [listaTarefas, setListaTarefas] = useState(
    JSON.parse(localStorage.getItem("lista-tarefas")) || [],
  );
  const [id, setId] = useState(
    listaTarefas.length > 0 ? listaTarefas.length - 1 : 0,
  );
  const inputRef = useRef(null);

  function handleCriaTarefa() {
    const valor = inputRef.current.value;

    if (valor.trim() !== "") {
        const listaAtualizada = [...listaTarefas, {id: id, texto: valor}]

        setListaTarefas(listaAtualizada);
        setId((valorAtual) => valorAtual + 1);

        localStorage.setItem("lista-tarefas", JSON.stringify(listaAtualizada));
    }
  }

  return (
    <div className="lista-tarefas-container">
      <h2>Tarefas</h2>
      {listaTarefas.map((item) => (
        <li className="item-tarefa" key={item.id}>
          {item.texto}
        </li>
      ))}
      {!criandoTarefa && (
        <button
          onClick={() => setCriandoTarefa(true)}
          className="btn-add-tarefa"
        >
          Adicionar Tarefa
        </button>
      )}
      {criandoTarefa && (
        <div className="cria-tarefa-container">
          <input ref={inputRef} type="text" name="tarefa" id="tarefa" />
          <button
            onClick={() => setCriandoTarefa(false)}
            className="btn-cancela-tarefa"
          >
            Cancelar
          </button>
          <button onClick={handleCriaTarefa} className="btn-cancela-tarefa">Salvar</button>
        </div>
      )}
    </div>
  );
}
