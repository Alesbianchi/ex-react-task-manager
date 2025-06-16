import { useEffect, useState } from 'react';

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    // Recupera i task dal backend
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
                const data = await response.json();
                console.log("Task ricevuti dal hook:", data);
                setTasks(data);
            } catch (error) {
                console.error("Errore nel recupero dei task:", error);
            }
        };

        fetchTasks();
    }, []);

    // Placeholder per le operazioni future
    const addTask = (newTask) => {
        // da implementare
    };

    const removeTask = (taskId) => {
        // da implementare
    };

    const updateTask = (updatedTask) => {
        // da implementare
    };

    return {
        tasks,
        setTasks,
        addTask,
        removeTask,
        updateTask,
    };
}
