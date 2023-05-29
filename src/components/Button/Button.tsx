import { Text } from "react-native";
import { ButtonStyle, ButtonText } from "./style";

interface ButtonProps {

    text: string
    color: '#E1B12C' | '#FFFDFF'
    onPressFunction: any;
    width: '328px' | '104px'
}

export default function Button({ text, color, onPressFunction, width }: ButtonProps){

    return (

        <ButtonStyle onPress={onPressFunction} width={width}  color={color} >
            <ButtonText color={color}>{text}</ButtonText>
        </ButtonStyle>
    )
}