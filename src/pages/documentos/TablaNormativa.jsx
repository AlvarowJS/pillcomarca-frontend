import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
const URL = 'https://backend.munipillcomarca.gob.pe/api/v1/documentonormativa'
const TablaNormativa = () => {

    const [normativas, setNormativas] = useState()

    useEffect(() => {
        axios.get(URL)
            .then(res => setNormativas(res.data))
            .catch(err => console.log(err))
    }, [])


    const columns = [
        {
            sortable: true,
            name: 'Documentos',
            cell: row => {
                return (
                    <div className='container'>
                        <div className='row my-2'>
                            <div className='col'>
                                <p >Doc:</p>
                            </div>
                            <div className='col'>{row?.nombre}</div>
                        </div>
                        <div className='row my-4'>
                            <div className='col'>Fecha:</div>
                            <div className='col'>{row?.fecha}</div>
                        </div>
                        <div className='row my-2'>
                            <div className='col'>Descripción:</div>
                            <div className='col'>{row?.descripcion}</div>
                        </div>

                    </div>
                )
            }
        },
        {
            sortable: true,
            name: 'Archivos',
            cell: row => {
                return (
                    <div className='container'>
                        <button className='btn btn-outline-danger' onClick={() => window.open(row?.archivo)}>
                            <i className='bx bxs-file-pdf' style={{ fontSize: 35 }}></i>
                        </button>
                    </div>
                )
            }
        }
    ]

    return (
        <>
            <div className='mx-5'>
                <DataTable
                    noHeader
                    pagination
                    className='react-dataTable'
                    columns={columns}
                    data={normativas}
                />
            </div>
        </>
    )
}

export default TablaNormativa