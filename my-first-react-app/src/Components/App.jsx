import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../CSS/App.css';
import Formm from './Formm';
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to my first React Project, <br /> This is a CV maker. </h1>
      <p>This was made to develop my basic react skills, I have made a Cv maker. You fill out each box and at
        the bottom of the screen it will generate a mockup CV, note its a basic generic template. You can then copy and paste it 
        into google docs or word, then tailor it however you would like. 
      </p>
      <Formm />
    </>
  )
}

export default App
