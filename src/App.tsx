import React from "react";
import TitleDescription from "./components/TitleDescription";
import LinkImage from "./components/LinkImage";
import CardGroup from "./components/CardGroup";
import SocialLinks from "./components/SocialLinks";
import AppLinks from "./components/AppLinks";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <main>
          <h1 className="title">Introducción</h1>
          
          <CardGroup>
            <div className="card-group-item">
              <div className="card-group-item-inner">
                <TitleDescription title="¿Quién soy yo?">
                  Soy un desarrollador sofware, con experiencia en proyectos usando typerscript, php, symfony y react, además, también he montado mi propio servidor donde tengo hosteada esta misma web.
                </TitleDescription>
              </div>
            </div>
            <div className="card-group-item">
              <div className="card-group-item-inner">
                <SocialLinks
                  github="https://github.com/Arangujavier"
                  linkedin="https://www.linkedin.com/in/javier-aranguren-ortiz/"
                />
              </div>
            </div>
          </CardGroup>

          <CardGroup>
            <div className="card-group-item">
              <div className="card-group-item-inner">
                <iframe 
                  src="https://www.youtube.com/embed/7Sw1IOGxn9s"
                  title="Noe Multiriesgo"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="card-group-item">
              <div className="card-group-item-inner">
                <TitleDescription title="Experiencia">
                  Tengo 1 año de experiencia en el desarrollo de software, con experiencia en proyectos usando typerscript, php, symfony y react.
                  <br /><br />
                  Además, también he montado mi propio servidor donde tengo hosteada esta misma web.
                  <br /><br />
                  Entre mis proyectos destacan los siguientes desarollos:
                  <div className="project-item">
                    <span>Aplicación web Noe Multiriesgo</span>
                    <AppLinks web="https://noe-multiriesgo.tesicnor.com" />
                  </div>
                  <div className="project-item">
                    <span>Aplicación móvil Noe Multiriesgo</span>
                    <AppLinks playStore="https://play.google.com/store/apps/details?id=com.tesicnor.multiriesgo&hl=es_419" appStore="https://apps.apple.com/es/app/noe-multi-riesgo/id6743802241" />
                  </div>
                  <div className="project-item">
                    <span>Predicción de caudales de ríos y expansión de fuegos con IA</span>
                  </div>
                </TitleDescription>
              </div>
            </div>
          </CardGroup>

          <CardGroup>
            <div className="card-group-item">
              <div className="card-group-item-inner">
                <TitleDescription title="Formación">
                  <div className="project-item">
                    <span>Especialista Universitario en Inversión Multimercado y Diversificación, Universidad de las Hespérides, cursando actualmente</span>
                    <AppLinks education="https://hesperides.edu.es/estudios/especialista-universitario-inversion-multimercado-diversificacion/#inscripcion" />
                  </div>
                  <div className="project-item">
                    <span>Grado Ingeniería informática, Universidad Pública de Navarra, septiembre 2024</span>
                    <AppLinks education="https://www.unavarra.es/sites/grados/informatica-y-telecomunicacion/ingenieria-informatica/presentacion.html" />
                  </div>
                  <div className="project-item">
                    <span>Bachillerato ciencias, Liceo Monjardín, mayo 2018</span>
                  </div>
                </TitleDescription>
              </div>
            </div>
            <div className="card-group-item">
              <div className="card-group-item-inner">
                <LinkImage
                  image="/images/setup.png"
                  title="Javier Aranguren"
                  href="https://www.unavarra.es/sites/grados/informatica-y-telecomunicacion/ingenieria-informatica/presentacion.html"
                />
              </div>
            </div>
          </CardGroup>

        </main>
      </div>
    );
  }
}

export default App;
