import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  createBrowserRouter,
  RouterProvider,
  Switch,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [theme, setTheme] = useState(null)
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#0f0f0f'
      showAlert('Dark Mode has been enabled','success')
      document.title = 'TextUtilis - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtilis - Home'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtilis - Dark Mode'
      // }, 1500);
    }
    else{
      document.body.style.background = 'white'
      showAlert('Light Mode has been enabled','success')
      setMode('light')
      document.title = 'TextUtilis - Light Mode'
    }
  }


  const toggleTheme = () =>{
    if(theme === 'red'){
      setTheme(null)
      document.body.style.background = 'white'
    }
    else{
      document.body.style.background = '#bb0000'
      showAlert('Red Theme has been enabled','success')
      setTheme('red')
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" theme={theme} toggleTheme={toggleTheme} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/about'  element={<About/>}/>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
