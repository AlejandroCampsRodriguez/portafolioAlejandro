

import imagen_python from '../img/01_3.png';
import imagen_sql from '../img/01_2.png';

function Aprendiendo(){


  return(
<>
<div className="container-fluid contaniner_aprendiendo">
<div className="row d-flex ">
<div className="col-12 columna1">
<div className="master_titulo">
  <div className="padre_titulo">
    <div className="titulo text-center">
      <h3>Aprendiendo</h3>
    </div>
  </div>
</div>
<div className="row d-flex flex-column-reverse flex-md-row align-content-center ">
  <div className="col-6">
   <div className="master_caja_uno d-flex justify-content-center justify-items-center cajas">
    <div className="padre_caja_uno ">
     
     <img src = {imagen_python} alt = 'python'/>
     
    </div>
   </div>

  </div>

  <div className="col-6 ">
  <div className="master_caja_dos  d-flex justify-content-center cajas">
    <div className="padre_caja_dos ">

    <img      src = {imagen_sql} alt = 'sql'/>

    </div>
   </div>
  </div>
</div>


</div>
</div>
</div>

</>
  


)
}

export default Aprendiendo