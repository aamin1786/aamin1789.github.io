import React from 'react';
import { StyleSheet
, Text,Dimensions,TouchableOpacity,ScrollView,View,Button,NavigationContainer,Stack
, SafeAreaView
, Image } from 'react-native';
import Swiper from 'react';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigatior} from '@react-navigation/stack';
import Home from './src/Home';

const decoration = StyleSheet.create({
rex: {
flex: 1,
backgroundColor: "dodgerblue",
borderWidth: 20,
borderColor: "#b4fa57",
},
wex:{
flex: 1,
}
});


//function App() {
  //   return (
    //     <NavigationContainer>
      //   <Stack.Navigator>
        //<Stack.screen name="Home" Component={Home} options={{title:'Gallery'}}/>
       // <Stack.screen name="showImage" Component={showImage} options={{headerShown: false}}/>
        // </Stack.Navigator>
        // </NavigationContainer>
     //);
// }

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const Result = () => {
return (
<ScrollView>
<View style={{
     display : 'flex',
     flexdirection:'row',
     flex:1,
     flexWrap:"wrap"
}}>

    
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<></>
<Image source={{ uri: 'https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2,
 //backgroundColor: black,
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/19/11/26/automotive-1838744__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2019/10/30/07/04/car-4588860__340.png'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image
source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/11/02/08/speedometer-1249610__340.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log("Image tapped")}>
<Image source={{ uri: 'https://images.hdqwalls.com/wallpapers/lambo-tron-drifting-5k-yb.jpg'}}
style={{
 height:deviceHeight /3-8,
 width: deviceWidth / 1-6,
 borderRadius: 10,margin: 2
}}
/>
</TouchableOpacity>
<Button title="select images" onPress={() => alert("you have selected your image sucessfully")}/>
</View>
</ScrollView>
);
}
export default Result;
