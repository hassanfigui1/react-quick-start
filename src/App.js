// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import React from 'react';
import './App.css';
import Students from './components/list-rendering/list';
class App extends React.Component {
  render() {
    return (
      <div>
        <Students/>
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
