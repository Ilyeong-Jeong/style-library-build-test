import reactLogo from './assets/react.svg';
import './App.scss';

import Test1 from './components/Test1';
import Test2 from './components/Test1';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Emotion</h1>
      </div>
      <Test1 />
      <Test2 />
    </div>
  )
}

export default App;