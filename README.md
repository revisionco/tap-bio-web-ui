# React UI for TapBio front-end web applications

## Stack

- Based on Rebass (http://jxnblk.com/rebass/)
- Styled Components (https://www.styled-components.com)
- Presented in React Storybook (https://storybook.js.org/)

## Contribute

- clone && `cd tap-bio-web-api`
- `yarn install`
- `yarn start`
- work

## Use

### Set up your project

- load Roboto in `public/index.html` `<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">`
- `import { Provider } from '@tap-bio/web-ui';`
- `import theme from '@tap-bio/web-ui/lib/theme';`
- wrap your app in the Provider component:

```js
<Provider theme={theme}>
  ...
</Provider>
```

### Consume a component in your application

- `import { ComponentName } from '@tap-bio/web-ui';`
- `<ComponentName />`

### Import Styled Components to make style adjustments to components

- `import styled from '@tap-bio/web-ui/lib/styled-components';`
- `const FancyComponent = styled(ComponentName)``;`

### Use rebass directly

- `import Rebass from '@tap-bio/web-ui/lib/rebass';`
- `import { RebassComponentName } from '@tap-bio/web-ui/lib/rebass';`
- `<RebassComponentName />`

## TODO

- [ ] https://github.com/osdevisnot/react-app-rewire-create-react-library