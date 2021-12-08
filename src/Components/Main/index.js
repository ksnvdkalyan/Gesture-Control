import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MouseControl from '../MouseControl'
import OnScreenWriting from '../OnScreenWriting'
import ScreenCapture from '../ScreenCapture'
import VolumeControl from '../VolumeControl'
import Home from '../Home'

const index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/mouseControl'>
          <MouseControl />
        </Route>

        <Route exact path='/onScreenWriting'>
          <OnScreenWriting />
        </Route>

        <Route exact path='/screenCapture'>
          <ScreenCapture />
        </Route>

        <Route exact path='/volumeControl'>
          <VolumeControl />
        </Route>
      </Switch>
    </Router>
  )
}

export default index
