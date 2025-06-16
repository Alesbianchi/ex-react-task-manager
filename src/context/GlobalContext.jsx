import { createContext } from 'react';
import { useTasks } from './useTasks';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const taskManager = useTasks();

    return (
        <GlobalContext.Provider value={taskManager}>
            {children}
        </GlobalContext.Provider>
    );
}