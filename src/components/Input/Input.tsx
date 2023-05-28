import { KeyboardTypeOptions } from "react-native";
import { Icon, InputBox, InputView, TextBox } from "./style";
import { Feather } from "@expo/vector-icons";
import { Dispatch } from "react";

interface InputProps {

    type?: 'text' | 'password';
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
}


export default function Input({setShowPassword, title, placeHolder, autoCapitalize, textContentType, keyboardType, secureTextEntry, type }: InputProps) {

    return (

        <InputView>
            <TextBox>{title}</TextBox>

            <InputBox
                autoCapitalize={autoCapitalize}
                textContentType={textContentType}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
            />
            {
                type === 'password' ?
                    <Icon onPress={()=>setShowPassword(!secureTextEntry)}>

                        <Feather name="eye-off" size={24} color="#666666" />
                    </Icon>
                    :
                    ''
            }

        </InputView>
    )
}