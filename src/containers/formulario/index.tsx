import React from "react";
import { Campo } from "../../styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cadastrar } from '../../store/reducers/contatos'
import { FormEvent, useState } from 'react'
import { BotaoSalvar, BotaoCancelar } from "../../styles";
import { Cancelar, CampoFormulario, Titulo } from "./style";


const Formulario = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')




    const salvarContato = (evento: FormEvent) => {
        evento.preventDefault()

        dispatch(
            cadastrar({
                email,
                nome,
                telefone
            })
        )
        navigate('/')
    }
    return (
        <>
            <Titulo>Adicionar Contato</Titulo>
            <CampoFormulario onSubmit={salvarContato}>
                <Campo
                    placeholder="Digite o Nome Completo"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                ></Campo>
                <Campo
                    placeholder="Digite o Telefone"
                    type="tel"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                ></Campo>
                <Campo
                    placeholder="Digite o Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Campo>
                <BotaoCancelar><Cancelar to={'/'}>Cancelar</Cancelar></BotaoCancelar>
                <BotaoSalvar>Adicionar</BotaoSalvar>
            </CampoFormulario>
        </>
    )
}

export default Formulario