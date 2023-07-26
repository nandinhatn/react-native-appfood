import React, {useState, useEffect, useContext} from "react";
import { MyContext } from "../../MyContext";

import {View , Image, Text, ScrollView, TouchableWithoutFeedback} from 'react-native'
import dates from '../../dates/index'
import {CardContainer, Cards, CardsConteinrInner,Images, Title, ButtonPlus, TextButton} from './style'
import { Button } from "@rneui/base";
import axios from 'axios'
import PopUP from "../../Pages/Modal";
import {setCart, setCarts} from '../../redux/modules/itenscarts';



const baseUrl = 'http://189.126.111.155:21222/api'


const CardComponent=(props)=>{

  const {cart,setCart} = useContext(MyContext)
 

     const [dados, setDados]= useState('')
     const [popup, setPopup] = useState(false)
     const [selectProd, setSelectProd]=useState('')
     const [qtd, setQtd]= useState(0)
     const [exibProd, setExibProd] = useState(true)
     

    axios.get(`${baseUrl}/produtos`).then(response=> setDados(response.data.response))

    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64,
      };
      function pressModal(el){
      
        setPopup(true)
        setSelectProd(el)
   setQtd(itemIsCart(el.id)) 
    
        
      }

      function qtdAdd(){
       
        setQtd(qtd + 1)
      }
      function qtdMin(){
        setQtd(qtd -1)
      }

      function closeModal(){
        setPopup(false)
        setExibProd(true)
        setQtd(0)
       
      }
      function goToCart(){
        setPopup(false)
        props.navigation.navigation.navigate('Cart')
      }
      function itemIsCart(id){
        
        if(cart){
          console.log('ifcart')
          
          let contain= cart.filter((el)=> el.id ===id)
         
          if(contain.length>0){
            console.log('contain', contain)
            return contain[0].qtd
          }
          else{
            return 0
          }

        }
          else{
            return 0
          }
      }

     
    
    return(<>
    <CardContainer>
  <ScrollView showsVerticalScrollIndicator={false} >
   
  <PopUP visible={popup} dados ={selectProd} goToCart={()=> goToCart()} exibProd={exibProd} onsucessModal={()=>setExibProd(false)} qtdMin={()=>qtdMin()} qtdAdd={()=> qtdAdd()} qtd={qtd} requestClose={()=> closeModal()}/>
    {dados.length>0 ?
    

    
    
   dados.map((el)=> {
            return (<>
              
             <Cards key={el.id}>
                <CardsConteinrInner>
                <Title>{el.title}</Title>
            <Title>R${el.price}</Title>
           
           <TouchableWithoutFeedback onPress={()=> pressModal(el)}>
            <ButtonPlus>
                <TextButton>+</TextButton></ButtonPlus></TouchableWithoutFeedback>
                </CardsConteinrInner>
            
             <Images source={{uri: el.img}} />
            
           
        </Cards>
            </>)
        }): 
    
    
    <Text>Carregando</Text>}
       
        </ScrollView>
       
    </CardContainer>
    
    </>)
}
export default CardComponent