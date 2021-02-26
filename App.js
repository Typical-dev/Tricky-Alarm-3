import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from "./components/Clock"

export default class App extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style = {{backgroundColor:"grey"}}> 
          <Text>
            Some random text
</Text>
        </View>
      
        <Clock/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    color: "red",
    height: "100%",
    width:"100%",
    
  },

  text: {
    fontSize: 40,
    textAlign:"center",
  }
});
