import React from 'react'
import portada1 from './../assets/img/portada1.png'
import portada2 from './../assets/img/portada2.jpg'
import portada3 from './../assets/img/portada3.png'
import './style/Home.css'
const Home = () => {
  const sysdoc = () => {
    window.open('http://165.22.34.176/login')
  }
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={portada2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={portada1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={portada3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='cards__local'>
        <section>
          <i className='bx bx-book' onClick={sysdoc}></i>
          <h3>TRAMITE DOCUMENTARIO</h3>
        </section>
        <section>
          <i className='bx bx-shield-alt-2'></i>
          <h3>SEGURIDAD CIUDADANA</h3>
        </section>

      </div>
    </>
  )
}

export default Home