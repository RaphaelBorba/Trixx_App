import styled from "styled-components/native";


export const MainView = styled.View`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

`
export const ButtonIdiom = styled.TouchableOpacity`

    width: 206px;
    height: 65px;
    background-color: #E1B12C;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-left: 20px;

`

export const ImageIdiom = styled.Image`

    width: 33px;
    height: 33px;
`

export const ButtonText = styled.Text`

    font-size: 16px;    
    color: #F8F8F8;
    font-weight: 600;
`