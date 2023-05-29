import { Image, Text } from "react-native";
import { ButtonView, MapText, MapView } from "./style";
import Button from "../Button/Button";


export default function Map() {

    return (

        <MapView>
            <MapText style={{ fontFamily: 'Poppins_600SemiBold' }}>Localização</MapText>
            <Image style={{ width: '100%' }} source={require('../../../assets/map.png')} />
            <ButtonView>
                <Button
                    fontSize={12}
                    color="#E1B12C"
                    onPressFunction={() => { return }}
                    text="Ativar o GPS"
                    width="104px"
                />
            </ButtonView>

        </MapView>
    )
}