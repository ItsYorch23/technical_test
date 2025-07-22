import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  const goToTasks = () => {
    navigate('/tasks');
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Bienvenidos</h1>
      <button onClick={goToTasks} style={{
        padding: '10px 20px',
        fontSize: '18px',
        borderRadius: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}>
        Entrar
      </button>
    </div>
  );
}
