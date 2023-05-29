import { Image } from "react-native";
import { HeaderView } from "./style";
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'; 


export default function Header(){


    return(

        <HeaderView>
            <SimpleLineIcons name="menu" size={32} color="white" />
            <Image source={require('../../../assets/blueHand.png')} />
            <AntDesign name="swap" size={32} color="white" />
        </HeaderView>
    )
}