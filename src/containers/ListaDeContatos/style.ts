import styled from "styled-components";

export const ContainerLista = styled.ul`
    margin-top: 3%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3%;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    
`