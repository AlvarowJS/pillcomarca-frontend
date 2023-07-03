import React, { useEffect, useState } from 'react'
import TablaNormativa from './TablaNormativa'
import axios from 'axios'
const URL = 'https://backend.munipillcomarca.gob.pe/api/v1/tipodedocumento'
const Normativa = () => {
  const [tipos, setTipos] = useState()
  const [selectedOption, setSelectedOption] = useState()
  const [selectYear, setSelectYear] = useState()
  const [search, setSearch] = useState()

  useEffect(() => {
    console.log(selectedOption, selectYear, search)
    axios.get(URL)
      .then(res => {
        setTipos(res.data)
      })
      .catch(err => console.log(err))
  }, [selectedOption, selectYear, search])

  const handleTipos = () => {
    setSelectedOption(event.target.value);

  }

  const handleYears = () => {
    setSelectYear(event.target.value);
  }

  const handleSearch = () => {
    setSearch(event.target.value);
  }
  const years = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996,
    1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986
  ];

  return (
    <>
      <h2 className='m-4'>Normativas</h2>
      <aside className='container'>
        <div className='row'>
          <div class="form-group col-5">
            <label htmlFor="tipo_doc">Tipo de documento</label>
            <select class="form-select" aria-label="" onChange={handleTipos}>
              {
                tipos?.map(tipo => (
                  <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                ))
              }
            </select>
          </div>

          <div class="form-group col-2">
            <label htmlFor="tipo_doc">Año</label>
            <select class="form-select" aria-label="" onChange={handleYears}>
              {years?.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div class="form-group col-5">
            <label htmlFor="tipo_doc">Buscar Normativa</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Buscar por nombre" onChange={handleSearch} />
          </div>
        </div>
      </aside>
      <aside>
        <TablaNormativa />
      </aside>
    </>
  )
}

export default Normativa