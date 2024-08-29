import imagen_python from '../img/01_3.png';
import imagen_sql from '../img/01_2.png';
import js from '../img/01_6.png';
import html from '../img/01_7.png';
import css from '../img/01_8.png';
import boot from '../img/01_9.png';

function Aprendiendo() {
  return (
    <>
      <div className="container-fluid container_aprendiendo ">
        <div className="row">
          <div className="col-md-6">
            <div className="master-enCurso">
              <div className="padre-enCurso">
                <h2 id ='otros' className='curso-titulo text-center'>En Curso</h2>
                
                {/* Contenedor para HTML */}
                <div className="contenedor-imagen-porciento-master">
                  <div className="contenedor-imagen-porciento-padre d-flex justify-content-center flex-wrap align-items-center">
                    <img src={html} alt='HTML' />
                    <div className="prueba d-flex">
                    <div className="html text-center">                    
                      90%
                     </div>
                    </div>
                  </div>
                </div>

                {/* Contenedor para JS */}
                <div className="contenedor-imagen-porciento-master">
                  <div className="contenedor-imagen-porciento-padre d-flex justify-content-center flex-wrap align-items-center">
                    <img src={js} alt='js' />
                    <div className="prueba d-flex">
                    <div className="js text-center">                    
                      65%
                     </div>
                    </div>
                  </div>
                </div>

                {/* Contenedor para CSS */}
                <div className="contenedor-imagen-porciento-master">
                  <div className="contenedor-imagen-porciento-padre d-flex justify-content-center flex-wrap align-items-center">
                    <img src={css} alt='HTML' />
                    <div className="prueba d-flex ">
                    <div className="css text-center">                    
                      70%
                     </div>
                    </div>
                  </div>
                </div>

                {/* Contenedor para Bootstrap */}
                <div className="contenedor-imagen-porciento-master">
                  <div className="contenedor-imagen-porciento-padre d-flex justify-content-center flex-wrap align-items-center">
                    <img className= 'boot' src={boot} alt='HTML' />
                    <div className="prueba d-flex ">
                    <div className="boot-text text-center ">                    
                      80%
                     </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="master-aprendiendo d-flex justify-content-center ">

            <div className="padre-enCurso">
            <h2 id ='otros' className='aprendiendo-titulo text-center'>Aprendiendo</h2>

                <div className="imagenes-master d-flex justify-content-center  ">
                  <div className="imagenes-padre d-flex justify-content-spacearound  justify-items-center align-content-center flex-wrap justify-content-center">
                <img className='img-fluid imagen' src={imagen_python} alt='Python' />
                <img className='img-fluid imagen' src={imagen_sql} alt='SQL' />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aprendiendo;
