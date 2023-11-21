// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import React from 'react';
import './App.css';
import Form from './components/form/form';
class App extends React.Component {
  render() {
    return (
      <div className='center'> 
        <Form/>
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
