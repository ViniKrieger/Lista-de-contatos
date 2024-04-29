import * as S from './style' 
import { BotaoAdicionar } from '../../styles/index'
import React from 'react'

const BarraSuperior = () => {
    return(

        <S.header>
            <BotaoAdicionar to={'/novo'}>Adicionar Contato</BotaoAdicionar>
        </S.header>

    )
}

export default BarraSuperior