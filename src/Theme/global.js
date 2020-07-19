import { createGlobalStyle } from 'styled-components'

export const globalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        
        .Header{
            background-color: ${({ theme }) => theme.card};
        }
    
        .logo {
            filter: ${({ theme }) => theme.filter};
        }
    }


    body,
    a,
    div,
    span,
    small,
    p,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    input {
        color: ${({ theme }) => theme.text};
    }
`
