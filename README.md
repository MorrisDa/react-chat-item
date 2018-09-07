# Twilio Chat Item

[Live Demo](https://morrisda.github.io/twilio-chat-item/)

This is a simple responsive React component for a chat.

![example gif](https://media.giphy.com/media/5b7MDezsUYsHueqfgj/giphy.gif)

## Usage
Install latest version from npm:
```
npm install twilio-chat-item --save
```
Then, import it:
```javascript
import ChatItem from 'twilio-chat-item';
```
Finally, use it in your React application:
```javascript
import React, { Component } from 'react';
import ChatItem from 'twilio-chat-item';

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

## Options
You can supply the following props to the component

| Property name      | Type                      | Default              | Description                                                                                                                                                              |
| ------------------ | ------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title           | string | 'Harry Robinson'                  | First line string
| subtitle           | string | Online \| 14h                  | Second line string
| url           | string | 'https://via.placeholder.com/150x150'                  | Image URL
| statusColor           | string | 'green'                  | Color of status dot
| minWidth           | string\|number | 'auto'               | minimum width of the component
| maxWidth           | string\|number | 180                  | maximum width of the component
