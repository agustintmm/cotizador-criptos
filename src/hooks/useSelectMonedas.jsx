import {useState} from 'react'
import styled from '@emotion/styled'

// Estilos
const Label = styled.label`
    color: white;
    font-size: 25px;
    font-weight: 700;
`

const Select = styled.select`
    width: 100%;
    height: 45px;
    padding: 0px 10px;
    margin: 15px 0px;
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
`

const useSelectMonedas = (label, opciones) => {
    
    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectMonedas ]
}

export default useSelectMonedas