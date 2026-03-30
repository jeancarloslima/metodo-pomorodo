import './App.css'
import ContadorRegressivo from './components/ContadorRegressivo'
import EditorTempos from './components/EditorTempos'
import ListaTarefas from './components/ListaTarefas'
import { useState } from 'react'
import { GiTomato } from 'react-icons/gi'
import { FaPen } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'

function App() {
  const [editando, setEditando] = useState(false);
  const [tempoFoco, setTempoFoco] = useState(25);
  const [tempoDescanso, setTempoDescanso] = useState(5);

  return (
    <div id='app'>
      <header>
        <div id="header-container">
          <h1 id='titulo'>Pomodor<GiTomato /></h1>
          <button onClick={() => setEditando(!editando)} className='btn-editar-tempos'><IoSettingsSharp /></button>
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
  )
}

export default App
