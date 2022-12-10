import {Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <div className="main-bg-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <NotFound component={NotFound} />
    </Switch>
  </div>
)

export default App
