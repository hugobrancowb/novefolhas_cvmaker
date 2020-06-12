import React from 'react'
import axios from 'axios';

export class Relatorio extends React.Component {
  state = {
    code: '',
    curriculos: [],
    newsletter: []
  }

  codeChange = (event) => {
    this.setState({code: event.target.value});
  }

  getTable = (event) => {
    event.preventDefault();
    const code = this.state.code

    axios.post('/app/rel', { code })
      .then(res => {
        this.setState({curriculos: res.data.curr, newsletter: res.data.news});
      });
  }

  render () {
    return (
      <React.Fragment>
        <section id="relatorio">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Relatório</h1>
                <div id="login">
                  <input
                  placeholder="Código"
                  type="txt"
                  value={ this.state.code }
                  onChange={ this.codeChange }
                  />
                  <button className="btn" onClick={ this.getTable }>Gerar relatório</button>
                </div>

                {/* CURRICULOS */}
                <div id="tabela_curriculos">
                  <h4>Currículos</h4>
                <table class="table">

                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nome</th>
                      <th scope="col">email</th>
                      <th scope="col">tema</th>
                      <th scope="col">time</th>
                    </tr>
                  </thead>

                  <tbody>
                    { this.state.curriculos.map(el => {return(
                      <tr>
                        <td>{ el.id }</td>
                        <td>{ el.nome }</td>
                        <td>{ el.email }</td>
                        <td>{ el.tema }</td>
                        <td>{ el.time }</td>
                      </tr>
                    )})}
                  </tbody>

                </table>
                </div>

                {/* NEWSLETTER */}
                <div id="tabela_newsletter">
                  <h4>Newsletter</h4>
                <table class="table">

                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">email</th>
                      <th scope="col">origem</th>
                      <th scope="col">time</th>
                    </tr>
                  </thead>

                  <tbody>
                    { this.state.newsletter.map(el => {return(
                      <tr>
                        <td>{ el.id }</td>
                        <td>{ el.email }</td>
                        <td>{ el.origem }</td>
                        <td>{ el.time }</td>
                      </tr>
                    )})}
                  </tbody>

                </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      )
  }
}

export default Relatorio