import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Pokemon from './components/pokemon';


function App() {
  return (
    <div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/:name'>
						<Pokemon></Pokemon>
					</Route>
				</Switch>
			</Router>
		</div>
  )
}

export default App;
