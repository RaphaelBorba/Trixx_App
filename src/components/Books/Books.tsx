import { Image, Text, View } from "react-native";
import { BookText, BookView, BoxView, Boxs, Name } from "./style";


export default function Books() {

    return (

        <BookView>
            <BookText style={{ fontFamily: 'Poppins_600SemiBold' }}>Serviços e Reservas Próximos</BookText>

            <Boxs>

                <BoxView color='yellow'>
                    <Image style={{ width: 131, height: 76, borderRadius: 4, marginLeft: 3 }} source={require('../../../assets/restaurante.png')} />
                    <View style={{marginLeft:10, marginTop:5}}>

                        <Name style={{ fontFamily: 'Poppins_500Medium' }}>Prato Pronto</Name>
                        <Text style={{ fontFamily: 'Poppins_500Medium', color: 'white', fontSize: 12, lineHeight:14 }}>Ver mais</Text>
                    </View>
                </BoxView>
                <BoxView color='white'>
                    <Image style={{ width: 131, height: 76, borderRadius: 4, marginLeft: 3 }} source={require('../../../assets/salaoBeleza.png')} />
                    <View style={{marginLeft:10, marginTop:5}}>

                        <Name style={{ fontFamily: 'Poppins_500Medium' }}>Salão Glamour</Name>
                        <Text style={{ fontFamily: 'Poppins_500Medium', color: '#E1B12C', fontSize: 12, lineHeight:14 }}>Ver mais</Text>
                    </View>
                </BoxView>
            </Boxs>
        </BookView>
    )


}