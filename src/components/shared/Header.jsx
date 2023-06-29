import React, { useRef } from 'react'
import logo from './../../assets/img/logo.jpeg'
import logo_portal from './../../assets/img/portal_logo.png'
import './style/style.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const navbar = useRef()

  const sysdoc = () => {
    window.open('http://165.22.34.176/login')
  }
  const portalTrans = () => {
    window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s')

  }
  return (
    <>
      <nav ref={navbar} className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

          <a className="navbar-brand text-success logo h1 align-self-center">
            <img src={logo} className="local_logo" alt="" />
          </a>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex gap-3 mx-lg-auto">
                <li className="nav-item">

                  <NavLink to='/'
                    className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                  >
                    INICIO
                  </NavLink>
                </li>


                {/* DOcumentos */}

                {/* fin documentos */}
                <li className="nav-item dropdown">


                  <li className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    DOCUMENTOS
                  </li>

                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <NavLink to='/documentos'
                        // className="navlink_local"
                        className={({ isActive }) => isActive ? 'navbar__link navbar__links mx-2' : 'navbar__links mx-2'}
                      >

                        Gestión
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/normativa'
                        // className="navlink_local"
                        className={({ isActive }) => isActive ? 'navbar__link navbar__links mx-2' : 'navbar__links mx-2'}
                      >
                        Normativa
                      </NavLink>
                    </li>
                  </ul>

                </li>

                <li className="nav-item">

                  <NavLink to='/noticias'
                    className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                  >
                    NOTICIAS
                  </NavLink>
                </li>
                <li className="nav-item">

                  <NavLink to='/convocatorias'
                    // className="navlink_local"
                    className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                  >
                    CONVOCATORIAS
                  </NavLink>
                </li>
                <li className="nav-item">

                  <NavLink to='/ubicanos'
                    className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}
                  >
                    UBICANOS
                  </NavLink>
                </li>

              </ul>
            </div>
            <div className="navbar align-self-center gap-3 d-flex">
              <span className="links_local" onClick={sysdoc}>
                <i className='bx bx-user'></i>
                TRAMITE <br /> DOCUMENTARIO
              </span>
              <span className="links_local_portal" onClick={portalTrans}>
                <img src={logo_portal} className="local_logo_portal" alt="" />
              </span>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header