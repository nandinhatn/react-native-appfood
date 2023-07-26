import styled from 'styled-components'
import {Text}from 'react-native'
import {Col, Row, Grid, } from 'react-native-easy-grid'

export const TextTitle = styled.Text`
font-size: 20px;
text-align: center;
font-family: 'Roboto-Bold';
color:#353535;
padding-bottom: 20px;
padding-top: 20px;
`;

export const TextWhithout = styled.Text`
text-align: center;
padding-bottom: 20px;
padding-top: 20px;
font-size: 16px;
`

export const ContainerView = styled.View`
flex-direction: row;
justify-content: space-around;
gap:40px;
border-bottom-color: #cccc;
border-bottom-width: 3px;
padding: 10px;


`;



export const ContainerViewGrid = styled.View`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr;
border-bottom-color: #cccc;
border-bottom-width: 3px;
`

export const ContainerTitle = styled.View`

flex-direction: row;
gap:30px;
border-bottom-color: #cccc;
border-bottom-width: 3px;
justify-content: space-around;
padding: 10px;
color:#353535;
background-color: #CCC;

`
export const ItensCart = styled.Text`
font-size: 16px;
flex-direction: row;
text-align: left;
font-family: 'Roboto-Bold';
color:#353535;
`;