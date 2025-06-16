import { useEffect, useState } from 'react';


const API_URL = import.meta.env.VITE_API_URL;

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    // Recupera i task dal backend
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch(`${API_URL}/tasks`);
                const data = await res.json();
                setTasks(data);
            } catch (error) {
                console.error("Errore nel recupero dei task:", error);
            }
        };

        fetchTasks();
    }, []);

    // POST
    const addTask = async ({ title, description, status }) => {
        try {
            const res = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, status }),
            });

            const data = await res.json();

            if (data.success) {
                setTasks(prev => [...prev, data.task]);
            } else {
                throw new Error(data.message || 'Errore nella creazione del task');
            }
        } catch (err) {
            throw err;
        }
    };

    // Stub (le implementerai in milestone future)
    const removeTask = () => { };
    const updateTask = () => { };

    return {
        tasks,
        addTask,
        removeTask,
        updateTask,
    };
}