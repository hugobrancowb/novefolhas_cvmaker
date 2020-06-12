import React, { Suspense, lazy } from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Header from './components/Header'
import Home from './layouts/Home'
import Sobre from './layouts/Sobre'
import Ajude from './layouts/Ajude'
import FaleConosco from './layouts/FaleConosco'
import Termos from './layouts/Termos'
import Pagina404 from './layouts/Pagina404'
import Cookies from './components/Cookies'
import Relatorio from './layouts/Relatorio'
import Footer from './components/Footer'
import './assets/css/style.css'

const history = createBrowserHistory();

history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

const Formulario = lazy(() => import('./layouts/Formulario'));

class App extends React.Component {

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);

    setTimeout(function() { //Start the timer
      this.setState({showCookieMSG: true}) //After 1 second, set render to true
    }.bind(this), 5000);
  }

  state = {
    /* Social Media */
    twitter: '',
    facebook: '',
    instagram: 'https://www.instagram.com/novefolhas/',
    linkedin: 'https://www.linkedin.com/company/nove-folhas',

    /* Contato */
    email: 'hugobrancowb@gmail.com.br', /* mudar tb em ./layouts/FaleConosco e ./layouts/Termos */
    telefone: '',

    /* Cookie Message */
    showCookieMSG: false,
  }

  render(){return (
    <Router history={ history } ref={this.applyRef}> {/* se não pegar, envolver com um react.fragment */}
      <Header
      twitter = {this.state.twitter}
      facebook = {this.state.facebook}
      instagram = {this.state.instagram}
      linkedin = {this.state.linkedin}
      email = {this.state.email}
      telefone = {this.state.telefone}
      />
      
      <Suspense fallback={<div style={{display:"flex",height:"100vh",width:"100%",maxWidth:"100%"}}></div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/criar-curriculo" component={Formulario} />
        <Route path="/fale-conosco" component={FaleConosco} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/ajude-o-projeto" component={Ajude} />
        <Route path="/termos-de-uso-e-politica-de-privacidade" component={Termos} />
        
        <Route path="/relatorio" component={Relatorio} />
        <Route component={Pagina404} />
      </Switch>
      </Suspense>

      <Cookies showCookieMSG = {this.state.showCookieMSG} />
      <Footer
      twitter = {this.state.twitter}
      facebook = {this.state.facebook}
      instagram = {this.state.instagram}
      linkedin = {this.state.linkedin}
      email = {this.state.email}
      telefone = {this.state.telefone}
      />      
    </Router>
  );}
}

export default App;