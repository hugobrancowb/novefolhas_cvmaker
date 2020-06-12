import React from 'react'

export class Cookies extends React.Component {
  state = {
    cookies: false
  }
  render () {
    return (
      <React.Fragment>
      {((this.state.cookies === false) && (this.props.showCookieMSG)) &&
        <div id="cookie-popup">
          <div>
          <p>Utilizamos cookies originais e de terceiros para melhorarmos a sua experiência nesse site e compreendermos a forma como os utilizadores interagem com o nosso conteúdo. Ao continuar a navegar nesse site ou ao fechar esta mensagem sem modificar as definições do seu navegador, concordo com a utilização de cookies.</p>
          <button
          className="btn"
          onClick = {(e) => {
            e.preventDefault();
            this.setState({cookies: true});
          }}
          >Autorizo os cookies.</button>
          </div>
        </div>
      }
      </React.Fragment> 
    )
  }
}

export default Cookies