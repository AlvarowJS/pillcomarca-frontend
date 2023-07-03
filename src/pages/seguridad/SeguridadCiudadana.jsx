import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TablaSeguridad from './TablaSeguridad'
import DataTable from 'react-data-table-component'
const URL = 'http://127.0.0.1:8000/api/v1/seguridad'
const SeguridadCiudadana = () => {

  const [seguridads, setSeguridads] = useState()
  useEffect(() => {
    axios.get(URL)
      .then(res => setSeguridads(res.data))
      .catch(err => console.log(err))
  }, [])

  const columns = [
    {
      sortable: true,
      name: 'Nombre del Archivo',
      cell: row => {
        return (
          <div>
            <h5>  {row?.nombre} </h5>

          </div>
        )
      }
    },
    {
      sortable: true,
      name: 'Fecha',
      cell: row => {
        return (
          <div>
            <p>  {row?.fecha} </p>
          </div>
        )
      }
    },
    {
      sortable: true,
      name: 'Archivo Descargable',
      cell: row => {
        return (
          <div className='convocatoria'>
            {/* <a className='resultado-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
            <button className='btn btn-outline-danger' onClick={() => window.open(row?.archivo)}>
              <i className='bx bxs-file-pdf'></i> {row?.nombre}
            </button>


          </div>
        )
      }
    },

  ]
  return (
    <>
      <h1 className='my-4 mx-4'>Seguridad Ciudadana <i className='bx bx-shield-alt' ></i></h1>

      <DataTable
        noHeader
        pagination
        className='react-dataTable'
        columns={columns}
        data={seguridads}
      />
    </>
  )
}

export default SeguridadCiudadana