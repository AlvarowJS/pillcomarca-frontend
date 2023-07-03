import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardGestion from './CardGestion'
const URL = 'http://127.0.0.1:8000/api/v1/gestion'

const DocumentosGestion = () => {
  const [documentos, setDocumentos] = useState()

  useEffect(() => {
    axios.get(URL)
      .then(res => setDocumentos(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>
        Documentos de Gestión
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 my-2'>
            {
              documentos?.map(documento => (
                <CardGestion
                  key={documento.id}
                  documento={documento}
                />
              ))
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default DocumentosGestion