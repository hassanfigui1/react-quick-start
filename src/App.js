// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import React from 'react';
import './App.css';
import Increment from './components/learnings/increment';
class App extends React.Component {
  render() {
    return (
      <div>
        <Increment></Increment>
      </div>

    );
  }
}
// function App() {
//   return (
//     <div>Hello world </div>
//   );
// }

export default App;
