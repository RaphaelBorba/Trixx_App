import { Text } from "react-native";
import { PopoutBox, PopoutText, PopoutView } from "./style";
import Button from "../Button/Button";

interface PopoutProps {

    setPopout: any
}

export default function Popout({setPopout}:PopoutProps) {

    return (
        <PopoutView>

            <PopoutBox>

                <PopoutText>
                    - E-mail precisa estar no formato de e-mail
                </PopoutText>

                <PopoutText >
                    - Senha precisa ter no mínimo 6 caracteres e um precisa ser letra maiúscula!
                </PopoutText>

                <Button
                    color="#E1B12C"
                    text="Ok!"
                    onPressFunction={() => setPopout(false)}
                    width='104px'
                />

            </PopoutBox>

        </PopoutView>
    )
}