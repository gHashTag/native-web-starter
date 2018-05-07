import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class App extends Component {
  logStuff() {
    console.log("some stuff");
  }

  render() {
    return (
      <View>
        <Text>React Native Web Starter</Text>
        <Button onPress={this.logStuff} title="Log some stuff" />
      </View>
    );
  }
}

export default App;
