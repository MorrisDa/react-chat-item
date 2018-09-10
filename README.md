# React Chat Item

[Live Demo](https://morrisda.github.io/react-chat-item/)

This is a simple responsive React component for a chat.

![example gif](https://media.giphy.com/media/5b7MDezsUYsHueqfgj/giphy.gif)

## Usage
Put this repository inside of your `node_modules` folder (This project is ready to be deployed as a npm package). 

```javascript
import ChatItem from 'react-chat-item';
```
Use it in your React application:
```javascript
import React, { Component } from 'react';
import ChatItem from 'react-chat-item';

class App extends Component {
  render() {
    return (
      <div>
        <ChatItem title='Arnold Shwarp' />
      </div>
    );
  }
}

export default App;
```


**Notes**:
This component will import `Open Sans` font from `google fonts`.

## Options
You can supply the following props to the component

| Property name      | Type                      | Default              | Description                                                                                                                                                              |
| ------------------ | ------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title           | string | 'Harry Robinson'                  | First line string
| subtitle           | string | 'Online \| 14h'                  | Second line string
| url           | string | 'https://via.placeholder.com/150x150'                  | Image URL
| statusColor           | string | 'green'                  | Color of status dot
| minWidth           | string | 'auto'               | minimum width of the component
| maxWidth           | string | '180px'                  | maximum width of the component

## Development
Install dependencies:
```
npm install
```
Start development (server will listen at `localhost:3001`): 
```
npm start
```

## Build
Install dependencies:
```
npm install
```
Build distribution version (it will be located inside the `dist` folder):
```
npm run build
```
