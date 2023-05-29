import { Text } from "react-native";
import { ButtonStyle, ButtonText } from "./style";

interface ButtonProps {

    text: string
    color: '#E1B12C' | '#FFFDFF'
}

export default function Button({ text, color }: ButtonProps){

    return (

        <ButtonStyle color={color}>
            <ButtonText color={color}>{text}</ButtonText>
        </ButtonStyle>
    )
}