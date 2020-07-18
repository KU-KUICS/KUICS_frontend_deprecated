import { createGlobalStyle } from 'styled-components'

export const globalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    .Header,
    .ViewList{
        background-color: ${({ theme }) => theme.card};
    }
`
