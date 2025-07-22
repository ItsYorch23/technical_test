import React from 'react';

interface Props {
  current: string;
  onChange: (filter: string) => void;
}

const FilterButtons: React.FC<Props> = ({ current, onChange }) => {
  return (
    <div className="filters">
      <button onClick={() => onChange('all')} disabled={current === 'all'}>Todas</button>
      <button onClick={() => onChange('completada')} disabled={current === 'completada'}>Completadas</button>
      <button onClick={() => onChange('Pendientes')} disabled={current === 'Pendientes'}>Pendientes</button>
    </div>
  );
};

export default FilterButtons;
