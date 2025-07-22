import { useEffect, useState } from "react";
import FilterButtons from "../components/FilterButtons";
import TaskItem from "../components/TaskItem";
import type { Task } from "../types/Task";
import tareas from '../data/tasks.json';

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<string>('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setTasks(tareas);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

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

    return (
        <div className="app-container">
            <h1>Prueba de desarrollo</h1>
            <h1>Lista de Tareas</h1>
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
    )
}