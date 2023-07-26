import React, {useState, useEffect} from 'react';

import {View, Text, TouchableWithoutFeedback, Dimensions,TextInput, StyleSheet} from 'react-native'
import Geocode from 'react-geocode';
import { getDistance } from 'geolib';
import {withMask} from 'use-mask-input'
import {GoogleApiWrapper, Map, Marker} from 'google-map-react'

const Maps = ()=>{


     useEffect(()=>{
        console.log(location)
     },[location])

    const [location,setLocation]= useState('')
 /*   
    const [confirmLocation, setConfirmLocation] = useState('')
    const [coords, setCoords]= useState([])
    const [street, setStreet] = useState('')
    const [bairro, setBairro]= useState('')
    const [city, setCity]= useState('')
    const [frete,setFrete] = useState([])
    const [numero,setNumero]= useState('')
    const [complemento, setComplemento]= useState('')
    const [out,setOut]= useState(true)
    const [telefone, setTelefone]= useState('')
    const [cpf, setCpf]= useState('')
    const [mask,setMask]= useState('')

    function getPosition(){
        Geocode.setApiKey("AIzaSyCl8exTeNntZjoCAx2CaYyOHYpGP1gkIP0");
        Geocode.setLanguage("pt");
        Geocode.setRegion("br");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
    } */
    return(
        <>
        <View>
            <Text>Informações de Endereço</Text>
            <TextInput onChange={(text)=> setLocation(text)} value={location} style={styles.input} />
           
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    input:{
        
        borderBottomWidth: 2
    }
})
export default Maps

