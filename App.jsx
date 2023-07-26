/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()
import Home from './src/Pages/Home';
import Cart from './src/Pages/Cart';

import Header from './src/Components/Header';
import Slider from './src/Components/Slider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyContext } from './src/MyContext';



const Tab = createBottomTabNavigator();







function App({navigation}){

  const [cart,setCart]=useState([])
  const [count,setCount]=useState(0)

  useEffect(()=>{
     countItens()
    console.log('count', count)
  },[cart])

  const countItens = ()=>{
    let sum;
    if(cart.length>0){
       sum  = cart.reduce((acc, curr)=>{
        console.log('acc', acc, 'cur', curr.qtd)
        return acc + curr.qtd
     

      },0)
      console.log('sum', sum)
      setCount(sum)
      

    }
    return sum
  }
  return (
    <MyContext.Provider value={{cart, setCart}}>
    <SafeAreaView  style={styles.sectionContainer}>

      <Header/>
      <Slider/>
    
      <Text>
    
      </Text>
      <NavigationContainer >
    {/*   <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name='Home' component={Home} />

      </Stack.Navigator> */}
          <Tab.Navigator >
      <Tab.Screen name="Home" options={{
        headerShown:false,
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarLabelStyle:{fontSize:16, color: 'black', fontFamily:'Arial'},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={30} />
          ),
        }}   component={Home} />
      <Tab.Screen name="Cart"  options={{headerShown:false, tabBarBadge: count, tabBarShowLabel: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={'black'} size={30} />)}}  component={Cart} />
    
    </Tab.Navigator>
      
      </NavigationContainer>
      
  
    
    </SafeAreaView>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    
   
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
