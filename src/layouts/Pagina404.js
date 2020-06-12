import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/*
trocar 'Nove Folhas' por 'Nove Folhas'
trocar 'Nove Folhas' por 'Nove Folhas'
*/
export class Pagina404 extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Nove Folhas | Página não encontrada</title>
          <meta name="description"
          content="Página não encontrada."/>
        </Helmet>
        <section id="pagina404">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Página não encontrada</h1>
                <Link to="/">voltar para a página inicial</Link>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      )
  }
}

export default Pagina404