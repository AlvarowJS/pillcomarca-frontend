import React from 'react'
import './style/Ubicanos.css'
const Ubicanos = () => {
  return (
    <div className='ubicanos'>
      <div>
        <h2>Horario de Atención</h2>
        <p>
          8:00 am - 1:00 pm
        </p>
        <p>
          1:45 pm - 4:15 pm
        </p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15718.710191270879!2d-76.249167!3d-9.9607632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd3379c973%3A0x5007077161b51cfa!2sMunicipalidad%20Distrital%20de%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1684353322969!5m2!1ses-419!2spe">
      </iframe>
    </div>
  )
}

export default Ubicanos