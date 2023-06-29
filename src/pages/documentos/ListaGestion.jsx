import React from 'react'

const ListaGestion = ({lista}) => {
    return (
        <button className='btn btn-outline-danger' onClick={() => window.open(lista?.link)}>
            <i className='bx bxs-file-pdf'></i> {lista?.nombre}
        </button>
    )
}

export default ListaGestion