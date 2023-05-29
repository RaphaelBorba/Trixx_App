import { Text } from "react-native";
import { ButtonStyle, ButtonText } from "./style";

interface ButtonProps {

    text: string
    color: '#E1B12C' | '#FFFDFF'
    onPressFunction: any;
    width: '328px' | '104px',
    fontSize:16| 12
}

export default function Button({ text, color, onPressFunction, width, fontSize }: ButtonProps){

    return (

        <ButtonStyle onPress={onPressFunction} width={width}  color={color} >
            <ButtonText style={{fontFamily:'Poppins_400Regular', fontSize}} color={color}>{text}</ButtonText>
        </ButtonStyle>
    )
}