import { Dimensions, Text } from "react-native";
import { PopoutBox, PopoutText, PopoutView } from "./style";
import Button from "../Button/Button";

interface PopoutProps {

    page: 'Login' | 'Sign Up'
    setPopout: any
}

export default function Popout({ setPopout, page }: PopoutProps) {

    return (
        <PopoutView >

            <PopoutBox>

                {
                    page === 'Login' ?
                        <>
                            <PopoutText style={{fontFamily:'Poppins_400Regular'}}>
                                - E-mail precisa estar no formato de e-mail
                            </PopoutText>

                            <PopoutText style={{fontFamily:'Poppins_400Regular'}}>
                                - Senha precisa ter no mínimo 6 caracteres e um precisa ser letra maiúscula!
                            </PopoutText >
                        </>
                        :
                        <>
                            <PopoutText style={{fontFamily:'Poppins_400Regular'}}>
                                - Nome precisa ter no mínimo 3 letras
                            </PopoutText>

                            <PopoutText style={{fontFamily:'Poppins_400Regular'}}>
                                - E-mail precisa estar no formato de e-mail
                            </PopoutText>
                            
                            <PopoutText style={{fontFamily:'Poppins_400Regular'}}>
                                - Número precisa ter 11 números
                            </PopoutText>

                            <PopoutText style={{fontFamily:'Poppins_400Regular'}}>
                                - Senha precisa ter no mínimo 6 caracteres e um precisa ser letra maiúscula!
                            </PopoutText>
                        </>


                }



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