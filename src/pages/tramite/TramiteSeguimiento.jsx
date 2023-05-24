import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
const URL = "http://165.22.34.176/monitoring?record"
const TramiteSeguimiento = () => {
    const [validate, setValidate] = useState(false)
    const { handleSubmit, register, reset, watch } = useForm()

    const submit = (data) => {
        let nroExp = data?.expediente
        axios.get(`${URL}=${nroExp}`)
            .then(res => {
                console.log(res.data)
            })
        
    }
    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <label for="expediente">Seguimiento de Trámite:</label>
                <input type="text" id="expediente" name="expediente"
                    {...register('expediente')} />               

                <button type="submit">Buscar Expediente</button>
                {
                    validate == false ? null :
                        <p style={{ color: 'red' }}>Credenciales Incorrectas</p>
                }

            </form>
        </>
    )
}

export default TramiteSeguimiento