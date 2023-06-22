import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ContainerMain = styled.main `
    min-height: 95vh;
    display: flex;
`