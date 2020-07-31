import styled from 'styled-components';

const Terminal = styled.div`
    width: 80%;
    height: 80%;
    background-color: black;
    border-radius: 50px;
    border: 1rem solid #790030;
    
    padding: 3rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    z-index: -1;
`;

export default Terminal;