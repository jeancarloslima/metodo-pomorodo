import "./editor-tempos.css";

export default function EditorTempos() {
    return (
        <div className="editor-tempos-container">
            <div className="container-foco">
                <button>-</button>
                <h3 className="tempo-foco">25</h3>
                <button>+</button>
            </div>
            <div className="container-descanso">
                <button>-</button>
                <h3 className="tempo-foco">25</h3>
                <button>+</button>
            </div>
        </div>
    )
}