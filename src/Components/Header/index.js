
import {View, Text, Image} from 'react-native';
import logo_pizza from '../../assets/img/logo_pizza.jpg'

import styled from 'styled-components/native';
import {Container, ImageLogo} from './style.js'






export default function Header() {
    return (
      <Container>
        <ImageLogo  source={logo_pizza}/>
    
      </Container>
    );
  }
