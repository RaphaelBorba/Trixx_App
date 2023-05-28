import { TouchableHighlight, View } from "react-native";
import { ButtonIdiom, ButtonText, ImageIdiom, MainView } from "./style";


export default function ChooseIdiomScreen({navigation}: any) {

    return (

        <MainView>

                <ButtonIdiom onPress={()=>navigation.navigate('Login')} >
                    <ImageIdiom source={require('../../../assets/portugal.png')} />
                    <ButtonText>Português</ButtonText>
                </ButtonIdiom>
                
                <ButtonIdiom onPress={()=>navigation.navigate('Login')}>
                    <ImageIdiom source={require('../../../assets/reinoUnido.png')} />
                    <ButtonText>Inglês</ButtonText>
                </ButtonIdiom>

        </MainView>
    )
}