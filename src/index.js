import React from "react";
import ReactNative, { AppRegistry } from "react-native";

import App from "./components/App";

// register the app
AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
