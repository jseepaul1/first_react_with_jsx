import "./App.css";
import React from 'react';

// First React with JSX
// Create a new React project using create-react-app. Then, change the App.js component so that it shows us a page that resembles the following wireframe. 
// You can also adjust the CSS by changing App.css and using the JSX attribute className.

const toDoList = [
  "Learn React",
  "Climb Mt. Everest",
  "Run a Marathon",
  "Feed the Dogs",
];
function App() {
  const list = toDoList.map((list) => <li>{list}</li>);
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do: </h2>
      <h4>
        <ul>{list}</ul>
      </h4>
    </div>
  );
}

export default App;
