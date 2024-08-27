

function Footer(){
  return (
    



<div className="container-fluid">
<section id='contacto' className='contacto seccion-oscura'>
<div className='container'>
<div className="container text-center d-flex rectangulo justify-content-evenly ">
<div className="row d-flex justify-content-center ">



  <div className='col-12 col-md-4 descripcion'>
   Puedes contactarme por esta via:
  </div>

  <div className='col-12 col-md-4'>
   <a href='mailto:alexcrw42@gmail.com'>
    <button type='button'>
  Contacto
  <i className="bi bi-envelope-at"></i>
    </button>
    </a>
  </div>



</div>
</div>
<footer className='seccion-oscura d-flex flex-column alig-items-center justify-content-center'>



<p className='footer-texto text-center'>Aprendo y creo todos los dias<br/>creemos un proyecto juntos</p>

<div className='iconos-redes-sociales d-flex flex-wrap alig-items-center justify-content-center'>

<a href='https://twitter.com/freecodecampEs' target='_blank' rel = 'noopnener noreferrer'>
<i className="bi bi-twitter-x"></i>
</a>

<a href='https://github.com/freecodecamp/freecodecamp' target='_blank' rel = 'noopnener noreferrer'>
<i className="bi bi-github"></i>
</a>

<a href='mailto:alexcrw42@gmail.com' target='_blank' rel = 'noopnener noreferrer'>
<i className="bi bi-linkedin"></i>
</a>

<a href='https://twitter.com/freecodecampEs' target='_blank' rel = 'noopnener noreferrer'>
<i className="bi bi-envelope"></i>
</a>

</div>
<div className='d-flex justify-content-center'>Creado por Alejandro Camps &#169;</div>
</footer>
</div>
</section>
</div>



  )
}
export default Footer


