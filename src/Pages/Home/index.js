import React from 'react'
import {View, Text} from 'react-native'
import dates from '../../dates/index'
import CardComponent from '../../Components/CardComponents'


const Home = ({...navigation})=>{
    return(<>
    <View style={{flexGrow:1}}>

   <CardComponent navigation={navigation}/>
    </View>
    </>)
}

export default Home;