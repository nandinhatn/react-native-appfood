import React, {useState, useContext, useEffect} from "react";
import { MyContext } from "../../MyContext";
import { View, Modal, StyleSheet,TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {Container, TextTitle, Images, ViewButton, TextButton, ViewClose, TextQtd,ViewButtonMinus, ViewButtonAdd, TextButtonsMinusAdd, ContainerButtons} from './styles'
import moment from "moment";
import theme from '../../../theme';


const PopUP = (props,navigation)=>{
    const {cart,setCart} = useContext(MyContext)
    const [toggleCheck, setToggleCheck]= useState(false)
 

    function addCart(){
        console.log('props' , navigation)
        
        let id = props.dados.id
            console.log('lenght111 ' , cart)
          
           if(cart.length<=0){
            console.log('passsou aqui1')
                setCart([{...props.dados, qtd: props.qtd, marker: toggleCheck, date: moment()}])
            } 
            else{

                if(cart.length>0){
                 
                      let isIn= cart.filter((el)=> el.id==props.dados.id)
                    if(isIn.length>0){
                        console.log('dados ------' , props.qtd)
                       /*  isIn[0].qtd = parseInt(isIn[0].qtd) + parseInt(props.qtd) */
                        isIn[0].qtd = parseInt(props.qtd)
                        console.log('is in >>>>>>' , isIn, 'qtd ------', isIn[0].qtd)

                        let isOff = cart.filter((el)=> el.id != props.dados.id)
                        setCart([...isIn, ...isOff])
                        console.log('dentro do in', cart)
                    } else{
                        let obj = [...cart, {...props.dados, qtd: props.qtd, marker: toggleCheck, date: moment()}]
               
                        console.log('passsou aqui2',  cart)
                        setCart(obj)
                       
                        console.log('*************************************')
                        console.log('*************************************')
                        console.log('lenght do cart', cart.length  )

                    }
                   
                     props.onsucessModal()
                }

               
                    /* let itemIsList = [...cart].filter((el)=> el.id ===id)
                    if(itemIsList.length>0){
                        itemIsList[0].qtd = parseInt(itemIsList[0].qtd) + parseInt(props.qtd)
                    }
                    let removePresent = cart.filter((el)=> el.id !==id)
                    console.log('itemislist',itemIsList)
                    console.log('removePresent', removePresent)
                    setCart({itemIsList, removePresent}) */
               


            } 
          
          
       
           
           
            
           
        }

    


        useEffect(()=>{
            console.log('aqui',cart)
            
        },[cart])
    return(
        <Modal   dados={props.dados} onRequestClose={props.requestClose}  transparent={true} visible={props.visible} animationType="slide">
            <TouchableWithoutFeedback onPress={props.requestClose}>
                <View style={styles.background}>
            
                </View>
             
            </TouchableWithoutFeedback>
           
           {props.exibProd? 
           <>
            <View style={styles.container}>

           
<Text style={styles.title}> {props.dados.title}</Text>
<Images source={{uri: props.dados.img}}/>


{props.dados.allowSelf ? <View>
    <Text style={styles.TextSDefault}>Este produto permite permite opção meia</Text>
   <View style={styles.ContainerSelf}>
    
    <CheckBox tintColors={true? 'pink': null} animationDuration={.1} value={toggleCheck} onValueChange={()=> setToggleCheck(!toggleCheck)}/>
    <Text style={styles.TextSDefault}>Meia Pizza</Text></View> 
</View> : null}
<ContainerButtons>
    <TouchableOpacity disabled={props.qtd<=0 ? true: false} onPress={()=> props.qtdMin()}>
        <ViewButtonMinus disabled={props.qtd<=0 ? true :false}><TextButtonsMinusAdd>-</TextButtonsMinusAdd></ViewButtonMinus></TouchableOpacity>
    <TextQtd>{props.qtd}</TextQtd>
    <TouchableOpacity onPress={()=> props.qtdAdd()}><ViewButtonAdd><TextButtonsMinusAdd>+</TextButtonsMinusAdd></ViewButtonAdd></TouchableOpacity>
</ContainerButtons>
<Text style={styles.title}>Detalhes: </Text>
<Text style={styles.TextSDefault}> {props.dados.details}</Text>

     <TouchableOpacity disabled={props.qtd<=0 ? true :false} onPress={()=>addCart()}>
       <ViewButton disabled={props.qtd<=0 ? true:false}><TextButton>Colocar no carrinho</TextButton></ViewButton>
     </TouchableOpacity>
    </View>
  
  
           </>
           
           : <View style={styles.containerSucesso}>
            
            <TextTitle>Inserido com sucesso! </TextTitle>
            <TouchableOpacity onPress={props.goToCart }>
                <ViewButton>
                    <TextButton>Ir para o Carrinho</TextButton>
                </ViewButton>
            </TouchableOpacity>
         
            <TouchableOpacity onPress={props.requestClose}>
                <ViewButton>
                    <TextButton>Continuar Comprando</TextButton>
                </ViewButton>
            </TouchableOpacity>
           
            
            </View>}
             <TouchableWithoutFeedback onPress={props.requestClose}>
        <View style={styles.background}></View>
    </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    container:{
        flex:6,      
        fontSize: 20,
        alignItems: 'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:20,
        padding:10,
        gap:10,
        
       
        backgroundColor: 'white'
    },
    containerSucesso:{
        flex:3,      
        fontSize: 20,
        alignItems: 'center',
        alignContent:'center',
      
        
        textAlign:'center',
        borderRadius:20,
        padding:10,
        gap:10,
        
       
        backgroundColor: 'white'
    },
    title:{
        fontSize: 20,    
        textAlign: 'center',
        fontFamily:'Roboto-Bold',
        color:'#353535'
        

    },
    ContainerSelf:{
        flexDirection:'row',
        alignItems: 'center',
        textAlign:'center',
        alignContent:'center',
        marginBottom: 20,
        alignSelf: 'center'
        

    },
    Button:{
        borderRadius:12,
        color:'black'
    },
    TextSDefault:{
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color:'#353535'
       
    }
})
export default PopUP