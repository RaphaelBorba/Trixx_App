import styled from "styled-components/native";


export const BookView = styled.View`

    width: 100%;
`

export const BookText = styled.Text`

    padding: 15px;
    font-size: 15px;
    color: #222D5B;
`
export const BoxView = styled.View<any>`

    width: 156px;
    height: 137px;
    background-color: ${props => props.color === 'yellow' ? 'rgba(225, 177, 44, 0.51)': 'white'} ;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    padding: 10px;
`

export const Boxs = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-around;

`

export const Name = styled.Text`

    font-size: 12px;
    color: #222D5B;

`