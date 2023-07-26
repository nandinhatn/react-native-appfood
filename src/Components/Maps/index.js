import React, {useState, useEffect} from 'react';

import {View, Text, TouchableWithoutFeedback, Dimensions,TextInput, StyleSheet} from 'react-native'
import Geocode from 'react-geocode';
import { getDistance } from 'geolib';
import {withMask} from 'use-mask-input'
import {GoogleApiWrapper, Map, Marker} from 'google-map-react'
import infos from "../../dates/info";

const Maps = ()=>{


     useEffect(()=>{
        console.log('location',location)
        getPosition()
     },[location])

     useEffect(()=>{
        console.log('confirm', coords)
     },[coords])

     const [distance, setDistance]= useState(0)
  const [location, setLocation]= useState('')
  const [confirmLocation, setConfirmLocation]= useState('')
  const [coords, setCoords] = useState([])
  const [street, setStreet] = useState('')
  const [bairro, setBairro]= useState('')
  const [city, setCity]= useState('')
  const [state, setState] =useState('')
  const [frete,setFrete] = useState([])
  const [numero, setNumero]= useState('')
  const [complemento, setComplemento]= useState('')
  const [out,setOut] = useState(true)
  const [name, setName] = useState('')
  const [telefone, setTelefone]= useState('')
  const [cpf,setCpf] = useState('')
  const [mask, setMask]= useState('')
 

    function getPosition(){
        Geocode.setApiKey("");
        Geocode.setLanguage("pt");
        Geocode.setRegion("br");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
    } 

    Geocode.fromAddress([location]).then(
        (response) => {
          
          const { lat, lng } = response.results[0].geometry.location;
          const resposta =[lat,lng]
      
        /*   console.log(lat, lng); */
          setCoords(resposta)
          confirmAdress(lat,lng)
         
          
         /*  confirmAdress(lat,lng) */
          
          
          
        },
        (error) => {
          console.error(error);
        }
      );

      function confirmAdress(lat, lng){
        Geocode.fromLatLng(lat, lng).then(
          (response) => {
            const address = response.results[0].formatted_address;
  
            const addressFormat = `${response.results[0].address_components[1].long_name}, 
            ${response.results[0].address_components[3].long_name},
            ${response.results[0].address_components[2].long_name},
            ${response.results[0].address_components[4].long_name}
                                  `
           
                                 
         
            setConfirmLocation(addressFormat)
            setStreet(response.results[0].address_components[1].long_name)
            setBairro(response.results[0].address_components[2].long_name)
            setCity(response.results[0].address_components[3].long_name)
            setState(response.results[0].address_components[4].long_name)
            
           
          },
          (error) => {
            console.error(error);
          }
        );
      }
      function findClosest(km) {
        return infos.faixas.reduce((best, current) => {
            return (current.distance >= km && (!best || current.distance < best.distance))
                ? current
                : best;
        }, undefined);
      }
      function saveAddres(){
    
        sucess()
        let info = `Rua : ${street}, \n n: ${numero},\n Bairro ${bairro}, \n Cidade: ${city}, \n Nome: ${name}, \n Telefone: ${telefone}, 
         \n CPF: ${cpf} \n  `
        props.address(info)
        
       
       }
       
       function sucess(){
        /*  const crd = pos.coords; */
     
      /*  console.log("Your current position is:");
       console.log(`Latitude : ${coords[0]}`);
       console.log(`Longitude: ${coords[1]}`); */
     /*   console.log(`More or less ${crd.accuracy} meters.`); */
     
     
       const distance = getDistance(
             
         { latitude: coords[0], longitude: coords[1] },
     
      
         { latitude: infos.latitude, longitude: infos.longitude }
     );
    
         calcFrete(distance)
     setDistance(distance)
     
     }
    return(
        <>
        <View>
            <Text>Informações de Endereço</Text>
            <TextInput onChangeText={(text)=> setLocation(text)} value={location} style={styles.input} />
           
        </View>
        <View>
            <Text>Confirmação de Endereço</Text>
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

