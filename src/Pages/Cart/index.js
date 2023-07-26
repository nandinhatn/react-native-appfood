import React, {useState, useContext} from "react";
import { MyContext } from "../../MyContext";
import {View, Text, TouchableWithoutFeedback, Dimensions} from 'react-native'
import {ContainerView, ItensCart, ContainerTitle, TextTitle, TextWhithout} from './style'
import {Col, Row, Grid} from 'react-native-easy-grid'
import Maps from "../../Components/Maps";
//procurar por flatlist Slide 


const Cart = (props)=>{
    const {cart,setCart}= useContext(MyContext)

    
  
    return(<>
    <View>
        <TextTitle> Itens do carrinho </TextTitle>
        <ContainerTitle>
            <ItensCart>Item</ItensCart>
            <ItensCart>Qtd</ItensCart>
            <ItensCart>Preço</ItensCart>
            <ItensCart>Total</ItensCart>
           
            
        </ContainerTitle>
    

   {cart.length>0 ? <>
   
  </> 
  
    
    
    : <TextWhithout>Nenhum produto adicionado no carrinho</TextWhithout>}
      
       
        {cart ?  cart.map((el)=>{
            return(
                <ContainerView key={el.id}>
                <ItensCart>{el.title}</ItensCart>
                <ItensCart> {el.qtd}</ItensCart>
                <ItensCart> R${el.price}</ItensCart>
                <ItensCart> R${parseFloat(el.price * el.qtd).toFixed(2)}</ItensCart>
                </ContainerView>
   )
        }
              
             
           
           
        )
              
        : <Text>Não existe</Text>
          }
       {/*  <TouchableWithoutFeedback   onPress={()=> setCart("Mudei o texto")}><Text>click</Text></TouchableWithoutFeedback> */}
    
      
    </View>
    <View>
      <Maps/>
    </View>
    </>)
}

export default Cart