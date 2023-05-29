import { Image, Text } from "react-native";
import { ButtonView, ForgetPassword, ForgetPasswordView, Form, MainView } from "./style";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Popout from "../../components/Popout/Popout";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen({ navigation }: any) {

    const [showPassword, setShowPassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [popout, setPopout] = useState(false)
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regexPassword = /^(?=.*[A-Z]).{6,}$/

    const validateLogin = () => {

        if (regexEmail.test(email) && regexPassword.test(password)) navigation.navigate('Home')

        else setPopout(true)
    }


    return (
        <KeyboardAwareScrollView>
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
                    regexValidation={regexEmail}
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
                    regexValidation={regexPassword}
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
                    onPressFunction={validateLogin}
                    width='328px'
                />
                <Button
                    text="Criar Conta"
                    color="#FFFDFF"
                    onPressFunction={() => navigation.navigate('Sign Up')}
                    width='328px'
                />

            </ButtonView>


            {
                popout
                    ?
                    <Popout
                        page="Login"
                        setPopout={setPopout}
                    />
                    :
                    ''
            }

        </MainView>
        </KeyboardAwareScrollView>
    )
}