import { MainView } from "./style";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";


export default function HomeScreen(){

    return (

        <MainView>
            <Header/>
            <Map/>
        </MainView>
    )
}