import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from "react-native"

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Reframe!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

export default App
