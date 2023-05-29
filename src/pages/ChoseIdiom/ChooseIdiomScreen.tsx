import { ButtonIdiom, ButtonText, ImageIdiom, MainView } from "./style";


export default function ChooseIdiomScreen({navigation, route}: any) {

    return (

        <MainView>

                <ButtonIdiom onPress={()=>navigation.navigate('Login')} >
                    <ImageIdiom source={require('../../../assets/portugal.png')} />
                    <ButtonText style={{fontFamily:'Poppins_600SemiBold'}}>Português</ButtonText>
                </ButtonIdiom>
                
                <ButtonIdiom onPress={()=>navigation.navigate('Login')}>
                    <ImageIdiom source={require('../../../assets/reinoUnido.png')} />
                    <ButtonText style={{fontFamily:'Poppins_600SemiBold'}}>Inglês</ButtonText>
                </ButtonIdiom>

        </MainView>
    )
}