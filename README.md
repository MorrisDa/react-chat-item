# React Chat Item

[Live Demo](https://morrisda.github.io/react-chat-item/)

This is a simple responsive React component for a chat.

![example gif](https://media.giphy.com/media/5b7MDezsUYsHueqfgj/giphy.gif)

## Usage

### Development
Run:
`npm install`
To install all dependencies
Then: 
`npm start`
To start development server. 

### Production
Run:
`npm install`
To install all dependencies
Then:
`npm run build`
To build the distribution version

Install latest version from npm:
```
npm install react-chat-item --save
```
Then, import it:
```javascript
import ChatItem from 'react-chat-item';
```
Finally, use it in your React application:
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
