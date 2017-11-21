const path = require("path");

module.exports = {
  babel: {
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build
    include: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules/react-native-uncompiled")
    ],
    use: {
      loader: "babel-loader",
      options: {
        // This aliases 'react-native' to 'react-native-web' and includes only
        // the modules needed by the app
        cacheDirectory: true
      }
    }
  }
};
