import React from 'react'
import ListaGestion from './ListaGestion'

const CardGestion = ({ documento }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                {documento.nombre}
            </div>
            <div className='card-body'>
                {
                    documento?.gestiondetalle?.map(lista => {
                        <ListaGestion
                            key={lista.id}
                            lista={lista}
                        />
                    })
                }
                {/* <button className='btn btn-outline-danger' onClick={() => window.open(documento?.link)}>
                    <i className='bx bxs-file-pdf'></i> {documento?.nombre}
                </button> */}

            </div>
        </div>
    )
}

export default CardGestion