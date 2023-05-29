import styled from "styled-components/native";



export const ButtonStyle = styled.TouchableOpacity<any>`

    width: ${props => props.width};
    height: 48px;
    background: ${props => props.color};
    box-shadow: 20px 20px 50px black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.color === '#FFFDFF' ? '1px solid #666666' : 'none'};
    
`

export const ButtonText = styled.Text<any>`

    color: ${props => props.color === '#E1B12C' ? '#FFFDFF' : '#666666'};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

`