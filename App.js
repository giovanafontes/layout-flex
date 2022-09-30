import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStatus='dark-content'/>
      <View style={styles.flexcontainer}>

        <View style={styles.container1}>
          <View style={styles.square1} />   
          <View style={styles.square2} />  
          <View style={styles.square3} />
        </View>

        <View style={styles.container2}>
          <View style={styles.square4} />  
          <View style={styles.square5} >
            <Text style={styles.flexboxtext}>FLEXBOX</Text>
          </View>
          <View style={styles.square6} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexcontainer: {
    flex: 1,
    backgroundColor: '#453f3f',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  container1: {
    backgroundColor: '#453f3f',
    flexDirection: 'column',
  },

  container2: {
    backgroundColor: '#453f3f',
    flexDirection: 'column',
  },

  square1: {
    width: 198,
    height: 200,
    backgroundColor: '#a900e6',
    margin: 3,
  },

  square2: {
    width: 198,
    height: 200,
    backgroundColor: '#459dff',
    margin: 3,
  },

  square3: {
    width: 198,
    height: 400,
    backgroundColor: '#7e00ff',
    margin: 3,
  },

  square4: {
    width: 198,
    height: 200,
    backgroundColor: '#97b6ff',
    margin: 3,
  },

  square5: {
    width: 198,
    height: 400,
    backgroundColor: '#459dff',
    margin: 3,
  },

  square6: {
    width: 198,
    height: 200,
    backgroundColor: '#8200c6',
    margin: 3,
  },

  flexboxtext: {
    fontSize: 35,
    fontWeight: 'bold',
    transform: [{ rotate: ('-90deg') }],
    textAlign: 'center',
    marginVertical: 170,
    letterSpacing: 2,
  }
});
