module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ['@babel/plugin-proposal-decorators', {"legacy": true}],
    // ['@babel/plugin-transform-flow-strip-types'],
    // ['@babel/plugin-proposal-class-properties', {"loose": true}],
  ],
};
