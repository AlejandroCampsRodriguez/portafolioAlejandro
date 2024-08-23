


function NavBar(){
  return(
   
<div className="container-fuid">
<nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid principal">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse caja_master_nav" id="navbarNav">
      <ul className="navbar-nav caja_padre_nav">
        <li className="nav-item caja_nav">
          <a className="nav-link active" aria-current="page" href="#">Acerca de mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

  )
}

export default NavBar