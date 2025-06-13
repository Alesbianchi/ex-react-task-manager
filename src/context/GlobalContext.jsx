import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    // Fetch iniziale dei task
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
                const data = await response.json();
                console.log("Task ricevuti:", data); // Debug
                setTasks(data);
            } catch (error) {
                console.error("Errore nel recupero dei task:", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}
