import { Image, Text } from "react-native";
import { ButtonView, ForgetPassword, ForgetPasswordView, Form, MainView } from "./style";
import Input from "../../components/Input/Input";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";

export default function LoginScreen() {

    const [showPassword, setShowPassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')




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
                    regexValidation={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                    value={email}
                    setValue={setEmail}
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
                    regexValidation={/^(?=.*[A-Z]).{6,}$/}
                    value={password}
                    setValue={SetPassword}
                />


            </Form>

            <ForgetPasswordView>
                <Text>Esqueceu sua senha ? </Text>
                <ForgetPassword>Clique aqui!</ForgetPassword>
            </ForgetPasswordView>

            <ButtonView>

                <Button
                    text="Entrar"
                    color="#E1B12C"
                />
                <Button
                    text="Criar Conta"
                    color="#FFFDFF"
                />

            </ButtonView>

        </MainView>
    )
}