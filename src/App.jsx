import './App.css'
import ContadorRegressivo from './components/ContadorRegressivo'
import EditorTempos from './components/EditorTempos'

function App() {

  return (
    <div className='app'>
      <header>
        <div className="header-container">
          <EditorTempos />
        </div>
      </header>

      <main>
        <div className="main-container">
          <ContadorRegressivo />
          <EditorTempos />
        </div>
      </main>
    </div>
  )
}

export default App
