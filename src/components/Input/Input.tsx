import { KeyboardTypeOptions } from "react-native";
import { Icon, InputBox, InputView, TextBox } from "./style";
import { Feather } from "@expo/vector-icons";
import { Dispatch, useState } from "react";

interface InputProps {

    type?: 'email' | 'password';
    title: string;
    placeHolder: string;
    autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined

    textContentType: 'none' | 'URL' | 'addressCity' | 'addressCityAndState' | 'addressState' | 'countryName' | 'creditCardNumber'
    | 'emailAddress' | 'familyName' | 'fullStreetAddress' | 'givenName' | 'jobTitle' | 'location' | 'middleName' | 'name' | 'namePrefix'
    | 'nameSuffix' | 'nickname' | 'organizationName' | 'postalCode' | 'streetAddressLine1' | 'streetAddressLine2' | 'sublocality'
    | 'telephoneNumber' | 'username' | 'password' | 'newPassword' | 'oneTimeCode' | undefined;

    keyboardType: KeyboardTypeOptions | undefined;

    secureTextEntry: boolean

    setShowPassword?: any

    regexValidation: any

    value: string

    setValue: any
}


export default function Input({ 
    value,
    setValue,
    regexValidation, 
    setShowPassword, 
    title, 
    placeHolder, 
    autoCapitalize, 
    textContentType, 
    keyboardType, 
    secureTextEntry, 
    type }: InputProps) {

        const [validated, setValidated] = useState(true)

        const handleOnChange = (value:string) =>{

            setValue(value)

            if(regexValidation.test(value) || value.length === 0){
                
                setValidated(true)
            }else{
                setValidated(false)
            }
        }

    return (

        <InputView>
            <TextBox style={{fontFamily:'Poppins_400Regular'}}>{title}</TextBox>

            <InputBox
                autoCapitalize={autoCapitalize}
                textContentType={textContentType}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                value={value}
                onChangeText={handleOnChange}
                validate={validated}
                
                
            />
            {
                type === 'password' ?
                    <Icon onPress={() => setShowPassword(!secureTextEntry)}>

                        <Feather name="eye-off" size={24} color="#666666" />
                    </Icon>
                    :
                    ''
            }

        </InputView>
    )
}