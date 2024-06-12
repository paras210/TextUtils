import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const changeBg = (color) => {
    document.body.style.background = color
    console.log("change function fired")
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black'
      showAlert("Dark mode is Enabled", "light")
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode is Enabled", "info")
      document.title = 'TextUtils - Light Mode'
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" modeColor={mode} toggleFun={toggleMode} changeBg={changeBg} />
        <Alert alertInfo={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About modeColor={mode}/>}/>
            <Route exact path="/" element={<TextForm heading="Type the text to analyze" modeColor={mode} alertFun={showAlert} />}/>
          </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;
