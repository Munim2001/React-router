import './App.css';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './components/Home';
import Country from './components/Country'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/country/:name">
            <Country></Country>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
