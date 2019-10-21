# React Reset CSS

## Why?

When creating React based application it's very common nowadays to use things like Emotion and Styled Component.
However when the need arises to do a reset CSS we fall back on things `injectGlobal` which kinda clutters that application code.
This is why I created `react-reset-css`.

## Installation

```bash
yarn add @pindakaasman/react-reset-css
# or
npm i @pindakaasman/react-reset-css
```

## Usage

**As Component**
```js
const MyApp = () => {
  return (
    <ResetCSS>
     // ...My app
    </ResetCSS>
  )
}
```

**As Higher order component**
```js
const MyApp = () => {
  return (
    <div />
  )
};

export default withResetCSS(MyApp);
```

**As Hook**
```js
const MyApp = () => {
  useResetCSS();

  return (
    <>
     // ...My app
    </>
  )
}
```

## Credit

- [Andy Bell](https://github.com/hankchizljaw) for writing the article ["A Modern CSS Reset"](https://dev.to/hankchizljaw/a-modern-css-reset-6p3) which inspired me to create a component for it.


## TODO:
- Write tests
- More
