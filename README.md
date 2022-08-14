https://github.com/mobinni/MealsToGo
## Yoga
Yoga is the official react-native layout engine for rendering views.
## eslint + prettier
1. install prettier and eslint from community
`yarn add --dev eslint prettier @react-native-community/eslint-config  #eslint+prettier`

2. install prettier and eslint  extensions
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

