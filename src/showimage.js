import React from "react";
import { ImageBackground, View ,Dimensions } from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;


const showImage =(props) => {
    return (
        <View> 
         <ImageBackground source={props.route.parmas.url} style={{height:deviceHeight,width:deviceHeight}}></ImageBackground>
        </View>
    )
}

export default showImage