import React from 'react'
import styled from '@emotion/styled'

const ContenedorResultado = styled.div`
    padding: 20px;
    @media (max-width:992px){
        display: grid;
        place-items: center;
  }
`
const Parrafo = styled.p`
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    span{
        color: #EA7913;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

    return (
        <ContenedorResultado>
            <img src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen Cripto'/>
            <Parrafo>Precio actual: <span>{PRICE}</span></Parrafo>
            <Parrafo>Precio más alto del dia: <span>{HIGHDAY}</span></Parrafo>
            <Parrafo>Precio más bajo del dia: <span>{LOWDAY}</span></Parrafo>
            <Parrafo>Variación últimas 24 horas: <span>%{CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Última actualización: <span>{LASTUPDATE}</span></Parrafo>
        </ContenedorResultado>
    )
}

export default Resultado