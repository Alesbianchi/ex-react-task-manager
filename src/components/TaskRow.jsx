import React from 'react';
import { Link } from 'react-router-dom';

const tdStyle = {
    padding: '0.75rem',
    borderBottom: '1px solid #ccc',
};

function TaskRow({ task }) {
    return (
        <tr>
            <td style={tdStyle}>
                <Link to={`/task/${task.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                    {task.title}
                </Link>
            </td>
            <td className={`status ${task.status.replace(/\s/g, '').toLowerCase()}`} style={tdStyle}>
                {task.status}
            </td>
            <td style={tdStyle}>
                {new Date(task.createdAt).toLocaleDateString('it-IT')}
            </td>
        </tr>
    );
}

export default React.memo(TaskRow);