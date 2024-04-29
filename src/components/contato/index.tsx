import React from "react"
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { useEffect } from "react"

import ContatoClass from '../../models/Contato'

import { remover } from '../../store/reducers/contatos'
import { editar } from '../../store/reducers/contatos'
import { Botao, BotaoCancelar, BotaoSalvar } from "../../styles"
import { DadosContato, Input, Imagem } from "./style"


type Props = ContatoClass

const Contato = ({
    id,
    nome: nomeOriginal,
    email: emailOriginal,
    telefone: telefoneOriginal
}: Props) => {

    const dispatch = useDispatch()

    const [estaEditando, setEstaEditando] = useState(false)
    //Alterações
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (nomeOriginal.length > 0) {
            setNome(nomeOriginal)
        }
    }, [nomeOriginal])

    useEffect(() => {
        if (telefoneOriginal.length > 0) {
            setTelefone(telefoneOriginal)
        }
    }, [telefoneOriginal])

    useEffect(() => {
        if (emailOriginal.length > 0) {
            setEmail(emailOriginal)
        }
    }, [emailOriginal])



    function cancelarEdicao() {
        setEstaEditando(false)
        setNome(nomeOriginal)
        setTelefone(telefoneOriginal)
        setEmail(emailOriginal)
    }

    return (

        <>
            <DadosContato>
                <Imagem src="https://cdn.icon-icons.com/icons2/185/PNG/512/Contacts_22705.png" alt="Contato"></Imagem>
                <Input
                    value={nome}
                    disabled={!estaEditando}
                    onChange={(evento) => setNome(evento.target.value)}
                ></Input>
                <Input
                    value={telefone}
                    disabled={!estaEditando}
                    onChange={(evento) => setTelefone(evento.target.value)}
                ></Input>
                <Input
                    value={email}
                    disabled={!estaEditando}
                    onChange={(evento) => setEmail(evento.target.value)}
                ></Input>
                 <div>
                {estaEditando ? (
                    <>
                        <BotaoSalvar
                            onClick={() => {
                                dispatch(
                                    editar({
                                        nome,
                                        telefone,
                                        email,
                                        id
                                    })
                                )
                                setEstaEditando(false)
                            }}
                        >Salvar</BotaoSalvar>
                        <BotaoCancelar onClick={cancelarEdicao}>Cancelar</BotaoCancelar>
                    </>
                    ) : (
                        <>
                            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                            <BotaoCancelar onClick={() => dispatch(remover(id))}>Remover</BotaoCancelar>
                        </>
                    )
                    }
                    </div>
            </DadosContato>
        </>
    )
}

export default Contato