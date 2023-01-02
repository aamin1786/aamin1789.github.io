

import React from 'react'
//import {ScrollView, view} from "react-native"
import { TouchableOpacity ,View, Image,Dimensions,ScrollView} from "react-native";
import images from  "./Images"; 

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const Home = (props) => {
   return 
    <ScrollView>
    <View style={{ display: 'flex',flexdirection:'row',flexWrap:"wrap"}}>
    {
     Images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => props.navigation.navigate("showImage",{
            url: image.url
        })}>
            <Image source={image.url} style={
                {
                    height:deviceHeight / 3,
                    width: deviceWidth / 3,
                    borderRadius: 10,margin: 2
                }}/>
        </TouchableOpacity>
     ))
     }
  </View>
  </ScrollView>
   } 




































import React,{Component} from 'react';
import {AppRegistry,StyleSheet,TouchableFeedBack,Animated,Header,Title,Body,Text,Flatlist,View,Image,Dimensions} from 'native';
import ListItem from './app/images12'

//let {width:screenWidth,height:screenHeight} = Dimensions.get('window')
export default class App extends Component{
    state = {

    }
  render() {
    return (
      <View style={styles.container}>
      <Flatlist
      data={[
        require("./app/images/images5(1).jpg"),
        require("./app/images/images5(2).jpg"),
        require("./app/images/images5(3).jpg"),
        require("./app/images/images5(4).jpg"),
      ]}
 renderItem={({item}) => {
    return <ListItem image={item}/>
 }}
   keyExtractor={
    (index) =>{ return index}
   }
/>
</View>
 )
}
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection: 'column',
      backgroundColor:'#F5FCFF',
    },
    });





import React from "react";
import { StyleSheet ,Text,Button,Dimensions ,Platform,TouchableOpacity,View,Image ,SafeAreaView} from "react-native";
//import Image from './assets/images1.png';

export default function App(){
    console.log(Dimensions.get("screen"));
    //console.log(require("./asstes/images.png"));
    return (
        <SafeAreaView style={StyleSheet.container}>
            <Text>Hello Aamin</Text>
            <TouchableOpacity onPress={() => console.log("Image tapped")}>
            <Image source={{
                width:200,
                height:300,
                uri:"https://picsum.photos/200/300"
               // uri:"https://picsum.photos/200/300?grayscale"

                }}/>
        
            </TouchableOpacity>
            <Button title="Click Me" onPress={() => alert("Button tapped")}/>
            </SafeAreaView>  
              
    );
}
const containerStyle ={ backgroundColor: "yellow"};
const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor: "dodgerblue",
        justifyContent:"center",
        alignItems:"center",
        paddingTop: Platform.Version ==="android " ? 20 :0,
        },
});









//spash screen format


import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const photos = [
  { uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg' },
  { uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg' },
  { uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg' },
  { uri: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg' },
  // { uri: 'https://cdn.skillflow.io/resources/img/skillflowninja.png' }
];

export default class Slideshow extends React.Component {
  scrollX = new Animated.Value(0) // this will be the scroll location of our ScrollView

  render() {
    // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
    let position = Animated.divide(this.scrollX, width);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          // this will bound the size of the ScrollView to be a square because
          // by default, it will expand regardless if it has a flex value or not
          style={{ width, height: width }}
          >
          <ScrollView
            horizontal={true}
            pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
            showsHorizontalScrollIndicator={false}
            // the onScroll prop will pass a nativeEvent object to a function
            onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
            )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
            scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
            >
            {photos.map((source, i) => { // for every object in the photos array...
              return ( // ... we will return a square Image with the corresponding object as the source
                <Image
                  key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                  style={{ width, height: width }}
                  source={source}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{ flexDirection: 'row' }} // this will layout our dots horizontally (row) instead of vertically (column)
          >
          {photos.map((_, i) => { // the _ just means we won't use that parameter
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
              outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
              // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
              // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
              extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
            });
            return (
              <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}



import react from 'react';
import { View } from 'react-native';
import Images from './src/Images';


const Home = () =>{
          return (
            <View>
              {
                Images.map((image,index) =>{
                  <Image source={image.uri}/>
                })           
               }
            </View>
          )
}