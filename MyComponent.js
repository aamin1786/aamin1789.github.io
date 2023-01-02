import React from 'react';
import { Image } from 'react-native';

const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";

export class MyComponent extends React.Component {
  render(){
    return (
      <Image source={{uri: imageUrl}} />
    );
  }
};