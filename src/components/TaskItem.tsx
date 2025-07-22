import React from 'react';
import type { Task } from '../types/Task';

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completada}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completada ? 'line-through' : 'none' }}>
        {task.titulo}
      </span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;


