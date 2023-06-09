import styled from "styled-components/native";


export const InputView = styled.View`

    width: 328px;
    margin-inline: auto;
    display: flex;
    position: relative;
`

export const TextBox = styled.Text`

    font-size: 16px;
    color: #666666;
    padding-bottom: 10px;
`

export const InputBox = styled.TextInput<any>`

    border: 1px solid ${props => props.validate ?'#666666' : 'red'} ;
    font-family:'Poppins_400Regular';
    width: 100%;
    border-radius: 8px;
    height: 48px;
    padding-left: 15px;
    color: #666666;
    font-size: 14px;
`

export const Icon = styled.TouchableHighlight`

    position: absolute;
    top: 53px;
    right: 20px;
    z-index: 1;

`
