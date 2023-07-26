import styled from 'styled-components/native';
import theme from '../../../theme';



export const Images = styled.Image`

border-width: 4px;
border-color: ${theme.colors.primary};
width: 150px;
height: 150px;
object-fit: cover;
border-radius : 100px;`
;

export const ViewButton= styled.View`
background-color: ${theme.colors.primary};
opacity:  ${props=> props.disabled? 0.5 :100};
border-radius: 12px;

color:white;
padding: 10px;
padding-left: 16px;
padding-right: 16px;
margin-top: 10px;
`
export const TextButton= styled.Text`
font-size:18px;
color:white;
font-family: 'Roboto-Bold';

`
export const ViewClose = styled.View`
background-color: ${theme.colors.primary};


`;
export const ViewButtonMinus= styled.View`
background-color: ${theme.colors.primary};
opacity:  ${props=> props.disabled? 0.5 :100};
border-bottom-left-radius:18px;
border-top-left-radius: 18px;
padding-left: 5px;
padding-right: 5px;
width: 40px;
align-items: center;
align-self: center;
text-align: center;
align-content: center;
`
export const TextButtonsMinusAdd = styled.Text`
color: white;
font-size: 30px;
font-weight: bold;

`
export const ContainerButtons = styled.View`
flex-direction: row;
gap: 10px;
align-items: center;
margin-bottom:10px;
`

export const ViewButtonAdd= styled.View`
background-color: ${theme.colors.primary};

border-bottom-right-radius:18px;
border-top-right-radius: 18px;
padding-left: 5px;
padding-right: 5px;
width: 40px;
align-items: center;
align-self: center;
text-align: center;
align-content: center;
`
export const TextQtd = styled.Text`
font-size: 30px;
font-weight: bolder;
`;

export const TextTitle = styled.Text`
font-size: 16px;
text-align: center;
font-family: 'Roboto-Bold';
padding-bottom: 20px;
padding-top: 20px;
`;