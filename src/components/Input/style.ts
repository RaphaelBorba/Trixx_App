import styled from "styled-components/native";


export const InputView = styled.View`

    width: 90%;
    margin-inline: auto;
    display: flex;
    gap: 10px;
    position: relative;
`

export const TextBox = styled.Text`

    font-size: 16px;
    color: #666666;
`

export const InputBox = styled.TextInput`

    border: 1px solid #666666;
    border-radius: 8px;
    height: 48px;
    padding-left: 15px;
    color: #666666;
    font-size: 14px;
`

export const Icon = styled.TouchableHighlight`

    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 1;

`
