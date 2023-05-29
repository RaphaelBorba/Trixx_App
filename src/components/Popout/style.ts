import styled from "styled-components/native"


export const PopoutView = styled.View`

    width: 100%;
    height: 123%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.3);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopoutBox = styled.View`

    width: 80%;
    height: 300px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 40px 20px;
`

export const PopoutText = styled.Text`

    font-weight: 500;
    font-size: 16px;
    color: #666666;

`