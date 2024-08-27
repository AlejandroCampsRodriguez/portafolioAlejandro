


import imagen01_1 from '../img/01_1.jpg'

function Titulo() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex flex-column-reverse flex-md-row"> 
          <div className="col-12 col-md-6">
            <div className="padre_titulo">
              <div className="contenedor-titulo">
                <h1 className='titulo'>Hola, Soy Alejandro Camps</h1>

                <div className="texto_master">
                  <div className="texto_padre">
                    <div className="texto">
                      ¡Hola! Soy Alejandro, un desarrollador web junior apasionado por crear experiencias digitales atractivas y funcionales. Desde que descubrí el mundo del desarrollo web, supe que quería dedicarme a construir aplicaciones que no solo sean útiles, sino también visualmente atractivas.
                      He estado trabajando con tecnologías como HTML, CSS, y JavaScript, y he dominado herramientas como Bootstrap y SCSS para diseñar interfaces responsivas. Además, tengo experiencia en React para construir aplicaciones interactivas y en Node.js para desarrollar la parte del servidor de mis proyectos.
                     El proyecto "Conociendo el saber", es una web enfocada hacia la enseñanza infaltil,
                     donde el niño o niña aprendera sobre los colores básicos, en este proyecto utilice tenconologias como React, Javascript, css, scss. En el enlace proyectos puede encontrar mas trabajos como estos.
                      Si deseas conocer más sobre mis proyectos o simplemente quieres charlar, no dudes en dar click en el enlace .¡Estoy emocionado de conectar con usted!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="master_imagen">
              <div className="padre-imagen">  
                <img className='img-fluid imagen-portada' src={imagen01_1} alt='imagenpc'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Titulo
