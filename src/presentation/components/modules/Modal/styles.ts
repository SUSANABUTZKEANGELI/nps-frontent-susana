import styled from "styled-components";

export const Dialog = styled.dialog`
    position: fixed; /* Fixa o modal na tela */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centraliza o modal horizontal e verticalmente */
    margin: 0; /* Remove margem padrão */
    z-index: 1000; /* Certifica que o modal estará acima de outros elementos */
    margin: auto;
    width: 700px;
    min-height: 400px;
    padding: 20px;
    border: none;
    margin-top: 20px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
`;
