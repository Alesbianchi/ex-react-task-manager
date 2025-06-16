import { useRef, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


function AddTask() {

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const descriptionRef = useRef();
    const statusRef = useRef();
    const { addTask } = useContext(GlobalContext);

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validazione titolo
        if (title.trim() === '') {
            setError('Il nome del task non può essere vuoto.');
            return;
        }

        if ([...symbols].some(char => title.includes(char))) {
            setError('Il nome del task non può contenere simboli speciali.');
            return;
        }

        setError('');

        const taskData = {
            title: title.trim(),
            description: descriptionRef.current.value.trim(),
            status: statusRef.current.value,

        };
        try {
            await addTask(taskData);
            alert('Task aggiunta con successo!');
            // Reset campi
            setTitle('');
            descriptionRef.current.value = '';
            statusRef.current.value = 'To do';
        } catch (err) {
            alert(err.message);
        }
        // console.log('Nuovo Task:', newTask);
    };

    return (
        <div className="container">
            <h1>Aggiungi un Nuovo Task</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome del Task:</label><br />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div>
                    <label>Descrizione:</label><br />
                    <textarea ref={descriptionRef} rows="4" cols="50" />
                </div>

                <div>
                    <label>Stato:</label><br />
                    <select ref={statusRef} defaultValue="To do">
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <button type="submit">Aggiungi Task</button>
            </form>
        </div>
    );
}


export default AddTask;