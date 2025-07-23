import React, { useEffect, useState } from 'react';
import './styles.css';
import type { Task } from './types/Task';
import TaskItem from './components/TaskItem';
import FilterButtons from './components/FilterButtons';
import tareas from './data/tasks.json';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
  if (!showWelcome) {
    setLoading(true); 
    const timeout = setTimeout(() => {
      setTasks(tareas);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout); 
  }
}, [showWelcome]);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completada: !task.completada } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completada') return task.completada;
    if (filter === 'Pendientes') return !task.completada;
    return true;
  });
  if (showWelcome) {
    return (
      <div className="welcome-screen">
        <img src="/img/logo_circu.png" alt="Logo" className="logo" 
        width={500}
        height={500}/>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>PRUEBA DE DESARROLLO</h1>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>¡Bienvenido!</h1>
        
        <button className="welcome-button" onClick={() => setShowWelcome(false)}>
          Entrar
        </button>
      </div>
    );
  }


  return (
    <div className="app-container">
      <h1>LISTA DE TAREAS</h1>
      <h1>¡Hora de ser productivos!</h1>
      <FilterButtons current={filter} onChange={setFilter} />
      {loading ? (
        <p>Cargando tareas...</p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
