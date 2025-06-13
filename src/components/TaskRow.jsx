import React from 'react';


const statusStyles = {
    "To do": { backgroundColor: '#f8d7da' },   // Rosso chiaro
    "Doing": { backgroundColor: '#fff3cd' },   // Giallo chiaro
    "Done": { backgroundColor: '#d4edda' }     // Verde chiaro
};

const tdStyle = {
    padding: '0.75rem',
    borderBottom: '1px solid #ccc'
};

function TaskRow({ task }) {
    return (
        <tr>
            <td>{task.title}</td>
            <td className={`status ${task.status.replace(/\s/g, '').toLowerCase()}`}>
                {task.status}
            </td>
            <td>{new Date(task.createdAt).toLocaleDateString('it-IT')}</td>
        </tr>
    );
}

// Evita render inutili
export default React.memo(TaskRow);
