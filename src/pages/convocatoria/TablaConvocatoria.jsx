import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
const URL = 'http://127.0.0.1:8000/api/v1/convocatoria'
import './style.css'
const TablaConvocatoria = () => {

    const [convocatorias, setConvocatorias] = useState()
    useEffect(() => {
        axios.get(URL)
            .then(res => setConvocatorias(res.data))
            .catch(err => console.log(err))
    }, [])
    const columns = [
        {
            sortable: true,
            name: 'Nombre del Proceso',
            cell: row => {
                return (
                    <div>
                        <h5>  {row?.nombre} </h5>
                        <p className='btn btn-success'>{row?.estado}</p>
                    </div>
                )
            }
        },
        {
            sortable: true,
            name: 'Bases',
            cell: row => {
                return (
                    <div className='convocatoria'>
                        {row?.conv_base?.map(item => (
                            <div key={item.id} className='convocatoria-entorno'>
                                {/* <a className='convocatoria-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                {/* <button className='btn btn-success' onClick={() => window.location.href = item.archivo}> */}
                                <button className='btn btn-outline-primary' onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
        },
        {
            sortable: true,
            name: 'Resultado E. Curricular',
            cell: row => {
                return (
                    <div className='convocatoria'>
                        {row?.entrevista?.map(item => (
                            <div key={item.id}>

                                {/* <a className='entrevista-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                <button className='btn btn-primary' onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
        }, {
            sortable: true,
            name: 'Resultado E. Entrevista',
            cell: row => {
                return (
                    <div className='convocatoria'>
                        {row?.result_cv?.map(item => (
                            <div key={item.id}>

                                {/* <a className='resultcv-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                <button className='btn btn-info' onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </button>
                            </div>
                        ))}

                    </div>
                )
            }
        },
        {
            sortable: true,
            name: 'Resultado Final',
            cell: row => {
                return (
                    <div className='convocatoria'>
                        {row?.resultado?.map(item => (
                            <div key={item.id}>
                                {/* <a className='resultado-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                <button className='btn btn-success' onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </button>
                            </div>
                        ))}

                    </div>
                )
            }
        },

    ]
    return (
        <div className='mx-5'>
            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={convocatorias}
            />
        </div>
    )
}

export default TablaConvocatoria