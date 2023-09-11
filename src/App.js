import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import ChatbaseIntegration from './ChatbaseIntegration'
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom'
import Services from './Services';
import Register from './Register';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import ProgressTracker from './ProgressTracker'
import Aintro from './Aintro';
import Bintro from './Bintro'
import Cintro from './Cintro'
import Dintro from './Dintro'
import Eintro from './Eintro'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/services' component={Services}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/ChatbaseIntegration' component={ChatbaseIntegration}/>
    <Route exact path='/ProgressTracker' component={ProgressTracker}/>
    <Route exact path='/Aintro' component={Aintro}/>
    <Route exact path='/Bintro' component={Bintro}/>
    <Route exact path='/Cintro' component={Cintro}/>
    <Route exact path='/Dintro' component={Dintro}/>
    <Route exact path='/Eintro' component={Eintro}/>


    <Redirect to='/'/>

    
    </Switch>
    <Footer/>
    </div>
  )
}

export default App;
