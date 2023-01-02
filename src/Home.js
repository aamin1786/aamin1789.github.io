import React from 'react'
//import {ScrollView, view} from "react-native"
import { TouchableOpacity ,View, Image,Dimensions,ScrollView} from "react-native";
import Images from  "./Images"; 

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const Home = (props) => {
   return (
    <ScrollView>
    <View style={{ display: 'flex',flexdirection:'row',flexWrap:"wrap"}}>
    {
     Images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => props.navigation.navigate("showImage",{
            url: 'image.uri',
        })}>
            <Image source={image.uri} style={
                {
                    height:deviceHeight / 3-8,
                    width: deviceWidth / 1-6,
                    borderRadius: 10,margin: 2
                }}/>
        </TouchableOpacity>
     ))
     }
  </View>
  </ScrollView>
   );
    }
