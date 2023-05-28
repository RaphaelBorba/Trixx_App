import { Image } from "react-native";
import { Form, MainView } from "./style";
import Input from "../../components/Input/Input";
import { useState } from "react";

export default function LoginScreen() {

    const [showPassword, setShowPassword] = useState(true)

    return (
        <MainView>
            <Image source={require('../../../assets/yellowHand.png')} />

            <Form>
                <Input
                    title="E-mail"
                    placeHolder="e-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    secureTextEntry={false}
                />

                <Input
                    title="Senha"
                    placeHolder="senha"
                    autoCapitalize="none"
                    keyboardType="default"
                    textContentType="password"
                    secureTextEntry={showPassword}
                    setShowPassword={setShowPassword}
                    type="password"
                />


            </Form>


        </MainView>
    )
}