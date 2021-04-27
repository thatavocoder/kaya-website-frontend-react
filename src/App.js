import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Components/Menu'
import Home from './Components/Home/Home'
import './App.css';
import DiagHome from './Components/StartDiagnosis/DiagHome';
import UploadImage from './Components/UploadImage/UploadImage';
import ImageDisplay from './Components/ImageDisplay/ImageDisplay';
import ImageScan from './Components/ImageScan/ImageScan';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path='/GeneralDetails'>
            <DiagHome/>
          </Route>
          <Route exact path='/UploadImage'>
            <UploadImage/>
          </Route>
          <Route exact path='/ImageDisplay'>
            <ImageDisplay/>
          </Route>
          <Route exact path='/ImageScan'>
            <ImageScan />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;