import React from 'react'
import { Link, NavLink } from 'react-router-dom';

/* imagens */
import img_logo_h_verde from './../assets/img/logo_h_verde.svg'

export class Header extends React.Component {
  componentDidMount() {
    var loadScript = function (src) {
      var tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(tag);
    }

    /* o caminho abaixo tem como raíz a pasta public, e não a src! */
    /* acho */
    loadScript('./../assets/vendor/mobile-nav/mobile-nav.js');
  }

  render() {
    return(
      <header id="header">

        <div id="topbar">
          <div className="container">
            <div className="social-links">
              {this.props.twitter &&
                <a href={ this.props.twitter } target="_blank" rel="noopener noreferrer" className="twitter"><i className="fa fa-twitter"></i></a>
              }
              {this.props.facebook &&
                <a href={ this.props.facebook } target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook"></i></a>
              }
              {this.props.linkedin &&
                <a href={ this.props.linkedin } target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fa fa-linkedin"></i></a>
              }
              {this.props.instagram &&
                <a href={ this.props.instagram } target="_blank" rel="noopener noreferrer" className="instagram"><i className="fa fa-instagram"></i></a>
              }
            </div>
          </div>
        </div>
      
        <div className="container">
    
          <div className="logo float-left">
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <h1 className="text-light"><a href="#intro" className="scrollto"><span>Rapid</span></a></h1> */}
            <Link to="/"><img src={ img_logo_h_verde } alt="" className="img-fluid"/></Link>
          </div>
    
          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li><NavLink activeClassName="active" exact to="/" >Início</NavLink></li>
              <li><NavLink activeClassName="active" to="/criar-curriculo" >Criar currículo</NavLink></li>
              <li><NavLink activeClassName="active" to="/sobre" >Sobre o site</NavLink></li>
              <li><NavLink activeClassName="active" to="/fale-conosco" >Fale conosco</NavLink></li>
              <li><NavLink to="/ajude-o-projeto" >Ajude o projeto</NavLink></li>
            </ul>
          </nav>{/* .main-nav */}
    
        </div>
    
      </header>
    )
  }
}

export default Header