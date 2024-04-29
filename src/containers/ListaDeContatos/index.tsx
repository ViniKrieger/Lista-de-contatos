import React from "react";
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { ContainerLista } from "./style";


import Contato from '../../components/contato'








const ListaDeContatos = ()=>{
    const  { itens }  = useSelector((state: RootReducer) => state.contatos)

return (
    <>
    <ContainerLista>
        {itens.map((c)=>(
            <li key={c.id}>
                <Contato
                    id={c.id}
                    nome={c.nome}
                    telefone={c.telefone}
                    email={c.email}
                />

            </li>
        ))}
    </ContainerLista>
        {/* <Contato></Contato> */}
    </>
)
}

export default ListaDeContatos