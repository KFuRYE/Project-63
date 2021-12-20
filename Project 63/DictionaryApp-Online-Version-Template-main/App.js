import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
        {/*
        
            <TextInput
            style={styles.inputBox
            onCHangeText={text => {
              this.setState9{
                text: text,
                inSearchPressed: false,
                word : "Loading...",
                lexicalCategory :'',
                examples :[],
                definition :""
                //url = "https://rupinwhitehatjr.github.io/dictionary/+seacrchKeyword+".json"
              }};
            }}
      }
      </View>
    )
  }
}
