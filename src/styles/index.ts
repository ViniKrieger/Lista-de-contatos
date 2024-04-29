import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%
  }
`
export const Campo = styled.input`
padding: 8px;
background-color: #FFFA99;
border-radius: 8px;
font-weight: bold;
color: #FFFA99;
border-color: #FFFA99;
width: 100%;
margin-bottom: 15px;
`

export const BotaoAdicionar = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #C4AD00;
  border-radius: 8px;
  margin-right: 8px;
  transition: 0.3s;
  width: 100%;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #F7E02F;
  }
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
  display: inline-block;
  margin-right: 15px;
  background-color: #2f3640;
  &:hover {
    background-color: #4b5c74;
  }
`
export const BotaoSalvar = styled(Botao)`
background-color: #44BD32;
&:hover {
  background-color: #1feb00;
}
`
export const BotaoCancelar = styled(Botao)`
background-color: #C23616;
&:hover {
  background-color: #ff3204;
}
`



export default EstiloGlobal