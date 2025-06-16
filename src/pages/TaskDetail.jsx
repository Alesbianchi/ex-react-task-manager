import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find(t => String(t.id) === id);

    if (!task) {
        return (
            <div className="container">
                <h1>Task non trovato</h1>
                <p>Controlla l'URL o torna alla <a href="/">lista task</a>.</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Dettaglio Task</h1>
            <p><strong>Nome:</strong> {task.title}</p>
            <p><strong>Descrizione:</strong> {task.description}</p>
            <p><strong>Stato:</strong> {task.status}</p>
            <p><strong>Creato il:</strong> {new Date(task.createdAt).toLocaleString('it-IT')}</p>

            <button
                onClick={() => console.log("Elimino task")}
                style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Elimina Task
            </button>
        </div>
    );
}

export default TaskDetail;
