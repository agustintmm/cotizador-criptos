import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #ff030376;
    color: #fff;
    margin: 10px auto;
    text-align: center;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error