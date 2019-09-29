import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    background: rgb(88,190,0);
    letter-spacing: 1.3px;
    box-shadow: 0 10px 20px rgba(8,190,0,0.49);
    color: white;
    transition: all 0.3s;
    :hover{
        background: rgb(79, 171, 0);
        cursor: pointer;
    }
    :active{
        transform: scale(0.95,0.95)
    }
    :disabled{
        background: #a2a2a2;
        color: white;
        box-shadow: none;
        cursor: not-allowed;
    }
`

export default Button;