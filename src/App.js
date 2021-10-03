import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/Jiomarthomepage/Serchbar';
import Ordersummary from './Pages/Ordersummary'
import Address from './Pages/Address'
import Final from './Pages/Final'

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
            <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/ordersummary'}  > <Ordersummary/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Address'}  > <Address/> </Route>
            <Route path={process.env.PUBLIC_URL + '/Final'}  > <Final/> </Route>
          </Switch>

      {/* <footer className="App-footer">
        
      </footer> */}
    </div>
  );
  }

export default App;
