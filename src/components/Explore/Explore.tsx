import { Box, ExploreText, ExploreView, Option, OptionsBox, BoxText } from "./style";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const options = ['Pizzaria', 'Restaurantes', 'Esportes', 'Salão', 'Barbearia', 'Tatuagem', 'Massagem', 'Estética', 'Ver todos']

export default function Explore() {

    const returnIcon = (option: string) => {

        switch (option) {
            case 'Pizzaria':
                return <Ionicons name="pizza-outline" size={29} color="white" />
            case 'Restaurantes':
                return <Ionicons name="restaurant-outline" size={29} color="white" />
            case 'Esportes':
                return <MaterialIcons name="sports-tennis" size={29} color="white" />
            case 'Salão':
                return <MaterialCommunityIcons name="hair-dryer-outline" size={29} color="white" />
            case 'Barbearia':
                return <MaterialCommunityIcons name="face-man-shimmer" size={29} color="white" />
            case 'Tatuagem':
                return <MaterialCommunityIcons name="needle" size={29} color="white" />
            case 'Massagem':
                return <MaterialIcons name="sports-kabaddi" size={29} color="white" />
            case 'Estética':
                return <MaterialCommunityIcons name="face-woman-shimmer-outline" size={29} color="white" />
            case 'Ver todos':
                return <FontAwesome5 name="boxes" size={29} color="white" />

        }
    }


    return (

        <ExploreView>
            <ExploreText>Explore</ExploreText>
            <OptionsBox
                contentContainerStyle={{ gap: 14, paddingRight: 30 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                bounces={false}
            >

                {options.map((e, i) => {
                    return (
                        <Option key={i}>
                            <Box>
                                {returnIcon(e)}
                            </Box>
                            <BoxText>{e}</BoxText>
                        </Option>
                    )
                })}

            </OptionsBox>
        </ExploreView>
    )
}