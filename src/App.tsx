import React from "react";
import TitleDescription from "./components/TitleDescription";
import LinkImage from "./components/LinkImage";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <main>
          <h1 className="title">Introducción</h1>
          <div className="row">
            <div className="row-col">
              <Card>
                <TitleDescription title="¿Quién soy yo?">
                  Soy un desarrollador sofware, con experiencia en proyectos usando typerscript, php, symfony y react, además, también he montado mi propio servidor donde tengo hosteada esta misma web.
                </TitleDescription>
              </Card>
            </div>
            <div className="row-col">
              <Card>
                <LinkImage
                  image="/images/profile.png"
                  title="Javier Aranguren"
                  href="https://www.linkedin.com/in/javier-aranguren-ortiz/"
                />
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="row-col">
              <Card>
                <LinkImage
                  image="/images/IconoMultiriesgo.jpg"
                  title="Javier Aranguren"
                  href="https://play.google.com/store/apps/details?id=com.tesicnor.multiriesgo"
                />
              </Card>
            </div>
            <div className="row-col">
              <Card>
                <TitleDescription title="Experiencia">
                  Tengo 1 año de experiencia en el desarrollo de software, con experiencia en proyectos usando typerscript, php, symfony y react, además, también he montado mi propio servidor donde tengo hosteada esta misma web.
                  Entre mis proyectos destacan los siguientes desarollos:
                  <ul>
                    <li>Aplicación web Noe Multiriesgo</li>
                    <li>Aplicación móvil Noe Multiriesgo</li>
                    <li>Predicción de caudales de ríos y expansión de fuegos con IA</li>
                  </ul>
                </TitleDescription>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="row-col">
              <Card>
                <TitleDescription title="Formación">
                  <ul>
                    <li>Grado Ingeniería informática, Universidad Pública de Navarra, septiembre 2024</li>
                    <li>Bachillerato ciencias, Liceo Monjardín, mayo 2018</li>
                    <li>Especialista Universitario en Inversión Multimercado y Diversificación, Universidad de las Hespérides, cursando actualmente</li>
                  </ul>
                </TitleDescription>
              </Card>
            </div>
            <div className="row-col">
              <Card>
                <LinkImage
                  image="/images/book.jpg"
                  title="Javier Aranguren"
                  href="https://www.unavarra.es/sites/grados/informatica-y-telecomunicacion/ingenieria-informatica/presentacion.html"
                />
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
