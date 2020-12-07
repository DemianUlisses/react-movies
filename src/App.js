import React from "react";
import { Link } from 'react-router-dom'
import { ApplicationRoutes } from "./ApplicationRoutes";

export default function App() {
  
  return (
    <div className="container">
     
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link  class="nav-link active" aria-current="page" to='/'>Inicio</Link>
        <Link  class="nav-link" to='/movies'>Filmes Popular</Link>  
        <Link  class="nav-link"  to='/playlists'>Listas de Favoritos</Link> 
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
      <ApplicationRoutes />
    </div>
  )
}
