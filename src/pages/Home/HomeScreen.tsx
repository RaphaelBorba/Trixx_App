import { Line, MainView } from "./style";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";
import Books from "../../components/Books/Books";


export default function HomeScreen(){

    return (

        <MainView>
            <Header/>
            <Map/>
            <Line/>
            <Books/>
            <Line/>
        </MainView>
    )
}