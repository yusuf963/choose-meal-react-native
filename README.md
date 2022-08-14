https://github.com/mobinni/MealsToGo

## Yoga

Yoga is the official react-native layout engine for rendering views.

## eslint + prettier

https://github.com/facebook/react-native/tree/main/packages/eslint-config-react-native-community

1. install prettier and eslint from community
   `yarn add --dev eslint prettier @react-native-community/eslint-config #eslint+prettier`

2. install prettier and eslint extensions
3. create a .eslintrc.js file in the root of the project
4. add the following to the .eslintrc.js file

```
module.exports = {
  extends: ['@react-native-community/eslint-config'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
```

or

```
{
  "extends": "@react-native-community",
  "root":true,
  "rules":{
    "quotes": [2, "double", { "avoidEscape": true }]
  }
}
```

3. add script into package.json

```
"scripts": {
  "lint": "eslint --ext .js,.jsx,.ts,.tsx src",
  "prettier": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'"
}
```

4. run script `yarn lint && yarn prettier` to lint and format code you can add `--fix` to fix the code

## Styling

styled components
https://styled-components.com/docs/basics#react-native
`yarn add styled-components`

## Assets and fonts

### fonts

https://github.com/expo/google-fonts

### SVG

https://github.com/react-native-svg/react-native-svg

## React-navigation

Docs https://reactnavigation.org/docs/getting-started/
React-navigation icon victor https://icons.expo.fyi/

`yarn add @react-navigation/native`
`expo install react-native-screens react-native-safe-area-context`
`yarn add @react-navigation/bottom-tabs`
