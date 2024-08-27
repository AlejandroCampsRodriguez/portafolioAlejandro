
import img_proyecto1 from '../img/01_4.png';
import img_const from '../img/01_5.png';
import react from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import scss from '../assets/scss.svg';



import  '../styles/Aprendiendo.css'

function Proyectos (){

  return(

<div className="container-fluid contenedor">
  <div className="row">
    <div className="contenedor_master_proyectos">  
       <div className="col-12 contenedor_padre_proyectos">   

           <div id='proyectos' className= 'text-center titulo_proyectos'>Proyectos</div>
              
       </div>
    </div> 
  </div>
  <div className="row">
    <div className="col-12">
       <div className="master_sofware">
         <div className="padre_software">
{/* comienza aqui proyextos */}



<section id='proyectos'  className="proectos-recientes seccion clara d-flex flex-column">
 
 

  {/*Galeria de proyectos */}
<div className="container text-center proyectos-contenedor">
<div className="row">


  {/*Proyecto 1 */}
  <div className="col-12 col-md-6 col-lg-4">

    <div className="proyecto ">
      <img className='img-fluid img-conociendo-saber' alt='proyect-1' src={img_proyecto1}/>
         <div className="over-lay ">
        <a className='link-conociendo-saber' href="https://alejandro657.github.io/S_Educativo/" target="_blank" rel="noopener noreferrer">
          <div className='conociendo-el-saber'>Conociendo el saber</div>
        </a>

    <div className='iconos-contenedor '>  
  <img className='react-logo' alt='react' src={react}/>  
  <img className='bootstrap-logo' alt='bootstrap' src={bootstrap}/> 
  <img className='css-logo' alt='css' src={css}/>   
  <img className='scss-logo' alt='scss' src={scss}/> 

      </div>

      </div>
    </div>

  </div>

{/*proyecto 2 */}
 <div className='col-12 col-md-6 col-lg-4'>
    <div className="proyecto">
      <img className='img-fluid img-const' alt='proyect-1' src={img_const }></img>
      <div className="over-lay">
        <p>proyecto</p>
        <div className="iconos-contenedor">
<div className='iconos-contenedor '>
  <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
  
  </a>
  <a href='https://www.freecodecamp.org/ 'target='_blank' rel='noopener noreferrer'>
 
  </a>
</div>
        </div>

      </div>
    </div>

  </div>

{/*proyecto 3*/}
   <div className="col-12 col-md-6 col-lg-4">
    <div className="proyecto">
      <img className='img-fluid img-const' alt='proyect-1' src={img_const }></img>
      <div className="over-lay">
        <p>proyecto</p>
        <div className="iconos-contenedor">
<div className='iconos-contenedor '>
  <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
 
  </a>
  <a href='https://www.freecodecamp.org/ 'target='_blank' rel='noopener noreferrer'>
 
  </a>
</div>
        </div>

      </div>
    </div>

  </div>

{/*proyecto 4 */}
  <div className="col-12 col-md-6 col-lg-4">
    <div className="proyecto">
      <img className='img-fluid img-const' alt='proyect-1' src={img_const }></img>
      <div className="over-lay">
        <p>proyecto</p>
        <div className="iconos-contenedor">
<div className='iconos-contenedor '>
  <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>

  </a>
  <a href='https://www.freecodecamp.org/ 'target='_blank' rel='noopener noreferrer'>
 {/*aqui va el icono de bootstrap */}
  </a>
</div>
        </div>

      </div>
    </div>

  </div>

{/*proyecto 5 */}
  <div className="col-12 col-md-6 col-lg-4">
    <div className="proyecto">
      <img className='img-fluid img-const'  alt='proyect-1' src={img_const }></img>
      <div className="over-lay">
        <p>proyecto</p>
        <div className="iconos-contenedor">
<div className='iconos-contenedor '>
  <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>

  </a>
  <a href='https://www.freecodecamp.org/ 'target='_blank' rel='noopener noreferrer'>

  </a>
</div>
        </div>

      </div>
    </div>

  </div>

  {/*proyecto 6 */}
  <div className="col-12 col-md-6 col-lg-4">
    <div className="proyecto">
      <img className='img-fluid img-const' alt='proyect-1' src={img_const }></img>
      <div className="over-lay">
        <p>proyecto</p>
        <div className="iconos-contenedor">
<div className='iconos-contenedor '>
  <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
 
  </a>
  <a href='https://www.freecodecamp.org/ 'target='_blank' rel='noopener noreferrer'>
 
  </a>
</div>
        </div>

      </div>
    </div>

  </div>
  {/*enlaces a mas recientes  proyectos */}


{/*testimonios */}
<section id='testimonios' className='testimonios seccion-clara'>
{/*carrusel */}
<div id="testimonios-carrusel" className="carousel carousel-dark slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
     

    </div>


    <div className="carousel-item">
    <div className='container'>
         
          <p className='testimonio-texto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis, perferendis ea velit dolorem inventore at illum natus distinctio, mollitia libero beatae ullam ad in autem tenetur. Commodi, earum necessitatibus.
          </p>
        <div className='testimonio-info'>
          <p className='cliente'>Gino</p>
          <p className='cargo'>Gerente de proyectos en desarrollo web</p>
        </div>
        </div>
    </div>

    <div className="carousel-item">
     <div className='container'>
          <img  className='testimonio-imagen rounded-circle' src='' alt ='cliente1'  />

        <div className='testimonio-info'>
          <p className='cliente'>Gino</p>
          <p className='cargo'>Gerente de proyectos en desarrollo web</p>
        </div>
        </div>
    </div>
  </div>




</div>
</section>

</div>
</div>
</section>



          {/*donde termina la pagina original */}
         </div>
       </div>

     </div>


  </div>


</div>




  )
}

export default Proyectos