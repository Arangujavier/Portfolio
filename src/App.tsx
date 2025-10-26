import React from "react";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Javier Aranguren</h1>
          <div className="introduction">
            <h2>Desarrollo total como meta.</h2>
            Un desarrollador software debe ser un profesional que domine los distintos componente del flujo de la creación y despliegue de un producto web
          </div>
        </header>
        <main>
          <section className="projects">
            <h2>Proyectos</h2>
            <Card 
              title="Mi Primer Proyecto"
              description="Este es un ejemplo de cómo usar el componente Card con contenido HTML ejecutable."
            />
            <Card 
              title="Proyecto con Código"
              description="Aquí puedes ver código HTML y CSS ejecutándose:"
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;