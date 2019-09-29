import styled from 'styled-components';

const Input = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    background: white;
    display: block;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0px 0px 20px rgba(0,0,0,0.02);
    transition: all 0.3s;
    :focus{
        box-shadow: 0 10px 20px rgba(88,190,0,0.25), 0px 0px 20px rgba(88,190,0,0.02);
    }
`

export default Input;