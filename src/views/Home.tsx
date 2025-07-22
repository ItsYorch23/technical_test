export default function Home() {
    return (
       <div className="welcome-screen">
        <img src="./public/img/logo.png" alt="Logo" className="logo" 
        width={150}
        height={150}/>

        <h1>¡Bienvenido!</h1>
        <a className="welcome-button" href="/tasks/create">
          Entrar
        </a>
      </div>
    )
}