import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
    itens: Contato[],
}

const initialState : ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Gabriel Costa',
            telefone: '55 99326-9123',
            email: 'gabrielcosta@gmail.com'
        },
        {   
            id: 2,
            nome: 'Cleiton da Silva Bento',
            telefone: '11 98177-9658',
            email: 'cleitinhobnt@gmail.com'
        },
        {
            id: 3,
            nome: 'Suzana Monteiro',
            telefone: '51 99227-9251',
            email: 'monteiro.suzana@gmail.com'
        },
    ],
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const ContatoJaExiste = state.itens.find(
                (contato) =>
                contato.telefone.toLowerCase() === action.payload.telefone.toLowerCase()
            )

            if (ContatoJaExiste) {
                alert('Já existe um contato com esse número de telefone')
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(contatoNovo)
            }
        },

    }
})

export const { remover, editar, cadastrar, } = contatosSlice.actions

export default contatosSlice.reducer