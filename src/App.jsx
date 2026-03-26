import { GiTomato } from 'react-icons/gi'
import './App.css'
import ContadorRegressivo from './components/ContadorRegressivo'
import EditorTempos from './components/EditorTempos'
import ListaTarefas from './components/ListaTarefas'

function App() {

  return (
    <div id='app'>
      <header>
        <div id="header-container">
          <h1 id='titulo'>Pomodor<GiTomato /></h1>
          <EditorTempos />
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
