import {View, Text, Image, StyleSheet} from 'react-native';
import {Container} from './style'
import axios from 'axios'
import React , {useState, useEffect} from 'react';

import Slick from 'react-native-slick';




export default Slider =()=>{

  


  const baseUrl = 'http://189.126.111.155:21222/api'
  const [dados, setDados] = useState('');
  const [number, setNumber] = useState('')
  const [count, setCount]= useState(0)
  axios.get(`${baseUrl}/categorias`).then((response)=> [setDados(response.data.response), setNumber(response.data.response.length)])

  const [item, setItem]= useState()


    useEffect(()=>{

      if(dados.length>0){
        setCount(Math.round(dados.length/2))
     

        
        
      
       
      }

    
      

    },[dados])
  

 
    /* const settings ={
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
    } */



    let myloop=[]
   /* 
      function listMenu(){ 
for(let j=3; j<=count; j=j+3){
  console.log('j', j)
  myloop.push(
    <View style={styles.views}>
        {dados.length>0? dados.map((el,i, array)=>{
          
          if(i<j){
            return(
              
              <Text style={styles.text}> {el.title}</Text> 
            )
           
          }
        }) :''}
     
      </View>
      
  )
}
      }  */
      let array =[]
      let conta = 3

     
    return(
        <Container>
          
        <Slick autoplay={true}  autoplayDirection={true} autoplayTimeout={3}   pagingEnabled={true}  horizontal={true}  scrollEnabled={true}  showsPagination={false}  >
           
             
            <View style={styles.views}>
              {dados.length>0? dados.map((el,i, array)=>{
                
                if(i<3){
                  return(
                    
                    <Text style={styles.text}> {el.title}</Text> 
                  )
                 
                }
              }) :''}
           
            </View>
           
            <View style={styles.views}>
            {dados.length>0? dados.map((el,i, array)=>{
                
                if(i>3 && i<6){
                  return(
                    
                    <Text style={styles.text}> {el.title}</Text> 
                  )
                 
                }
              }) :''}
            </View>
        
          
      
        
      </Slick>
        </Container>
    )
}



var styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
       
        justifyContent: 'center',
      alignItems: 'center',

       
        backgroundColor: 'red'
    },
    slide1: {
     
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
     
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
     
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 16,
     
      fontWeight: 'bold',
    },
    views:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    }
  })
   