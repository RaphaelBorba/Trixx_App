import { Image, View } from "react-native";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Form, MainView, Void } from "./style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Popout from "../../components/Popout/Popout";


export default function SignUpScreen({ navigation }: any) {

    const [showPassword, setShowPassword] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, SetPassword] = useState('')
    const [confirmPassword, SetConfirmPassword] = useState('')
    const regexName = /^.{3,}$/
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regexNumber = /^\d{11}$/
    const regexPassword = /^(?=.*[A-Z]).{6,}$/
    const [popout, setPopout] = useState(false)

    const validateSignUp = () => {

        if (regexName.test(name) && regexEmail.test(email) && regexNumber.test(number) && regexPassword.test(password) && password === confirmPassword) {
            navigation.navigate('Home')
        } else {
            setPopout(true)
        }
    }

    return (
        <KeyboardAwareScrollView>
            <MainView>

                <Image source={require('../../../assets/yellowHand.png')} />

                <Form>
                    {/* Name */}
                    <Input
                        title="Nome"
                        placeHolder="nome"
                        autoCapitalize="sentences"
                        keyboardType="default"
                        textContentType="name"
                        secureTextEntry={false}
                        regexValidation={regexName}
                        value={name}
                        setValue={setName}
                    />
                    {/* Email */}
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
                    {/* Number */}
                    <Input
                        title="Telefone"
                        placeHolder="telefone"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        textContentType="telephoneNumber"
                        secureTextEntry={false}
                        regexValidation={regexNumber}
                        value={number}
                        setValue={setNumber}
                    />
                    {/* Password */}
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
                    {/* Confirm Password */}
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
                        value={confirmPassword}
                        setValue={SetConfirmPassword}
                    />

                </Form>
                <Void />

                <Button
                    color="#E1B12C"
                    text="Criar Conta"
                    width="328px"
                    fontSize={16}
                    onPressFunction={validateSignUp}
                />


            </MainView >

            {
                popout
                    ?
                    <Popout
                        page="Sign Up"
                        setPopout={setPopout}
                    />
                    : ''
            }
        </KeyboardAwareScrollView>

    )
}