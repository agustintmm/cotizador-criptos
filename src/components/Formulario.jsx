import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
    width: 100%;
    height: 50px;
    background-color: #9497FF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: #7A7DFE;
    }
`




const Formulario = ({setMonedas}) => {
    
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Selecciona una moneda', monedas)
    const [ criptoMoneda, SelectCriptoMoneda] = useSelectMonedas('Selecciona una criptomoneda', criptos)

    useEffect( () => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()


            const arrayCriptos = resultado.Data.map( cripto => (
                {
                    id: cripto.CoinInfo.Name, 
                    nombre: cripto.CoinInfo.FullName
                }
            ))
            setCriptos(arrayCriptos)    
        }
        consultarAPI()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        if([moneda, criptoMoneda].includes('')){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 4000);  
        }
        setMonedas({
            moneda,
            criptoMoneda
        })

    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas/>
                <SelectCriptoMoneda/>

                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>
  )
}

export default Formulario