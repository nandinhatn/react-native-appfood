import styled from 'styled-components/native';
import theme from '../../../theme';



export const CardContainer = styled.View`
flex:1;
padding: 10px;


`;
export const Cards = styled.View`
flex-direction: row;

justify-content: center;
align-items: center;

border-bottom-width: 1px;

border-color: black;



`;
export const CardsConteinrInner= styled.View`
width: 80%;
flex: 1;
flex-direction: column;
justify-content: center;
margin-top: 20px;


`;

export const Images = styled.Image`

border-width: 2px;
border-color: ${theme.colors.primary};
width: 70px;
height: 70px;
object-fit: cover;
border-radius : 100px;`
;

export const Title = styled.Text`
font-size:18px;

font-family: 'Roboto-Bold';
text-transform: capitalize;

color:#353535;
margin-bottom: 20px;

`
export const ButtonPlus = styled.View`

width:40px;
background-color: ${theme.colors.primary};
height: 30px;
border-top-right-radius:16px;
/* border-radius:100px; */
flex:1;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const TextButton = styled.Text`
color: white;
font-weight: bold;
font-size: 18px;
`;