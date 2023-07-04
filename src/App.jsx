import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

// Estilos
const Heading = styled.h1`
  font-family: 'Lato', sans-serif; 
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto; 
  } 
`
const ContenedorImagen = styled.div`
  margin: 100px auto 0 auto;
  
  @media (max-width:992px){
    display: flex;
    justify-content: center;
  }
`

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
  }
`
const Imagen = styled.img`
  max-width: 600px;
  width: 90%;
  @media (max-width:992px){
    margin: auto;
  }
`


function App() {
  
  const [ cargando, setCargando ] = useState(false)
  const [ monedas, setMonedas ] = useState({})
  const [ resultado, setResultado ] = useState({})
  const [ mostrarResultado, setMostrarResultado] = useState(false)

  useEffect( () => {
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async () => {
        setResultado({})
        setCargando(true)
        
        const {moneda, criptoMoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptoMoneda][moneda])
        setCargando(false)
        setMostrarResultado(true)
      }

      cotizarCripto()
    }
  }, [monedas])

  return (

    <Contenedor>
      <ContenedorImagen>
        <Imagen
          src={ImagenCripto}
          alt='Imagenes Criptomonedas'
        />
      </ContenedorImagen>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          setMonedas = {setMonedas}
        />
        { cargando && <Spinner/>}
        {mostrarResultado ? <Resultado resultado = {resultado}/> : ''}
        
      </div>
    </Contenedor>
  
  )
}

export default App
