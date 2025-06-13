import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
          <NavLink to="/" end>Lista Task</NavLink>
          <NavLink to="/add">Aggiungi Task</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;