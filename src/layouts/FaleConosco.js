import React from 'react'
import { Helmet } from 'react-helmet';
import Newsletter from './../components/Newsletter'

/* imagens */
import img_contato from './../assets/img/contato-img.svg'

export class FaleConosco extends React.Component {
  state = {
    email: 'hugobrancowb@gmail.com',
    mailto: 'mailto:hugobrancowb@gmail.com'
  }
  render () {
    return (
      <React.Fragment>
      <Helmet>
        <title>Nove Folhas | Fale conosco</title>
        <meta name="description"
        content="Crie currículos personalizados grátis e sem cadastro! A Nove Folhas oferece diferentes temas pra você construir seu currículo e melhorar sua primeira impressão profissional."/>
      </Helmet>
      {/* HERO / FALECONOSCO */}
      <section id="hero_faleconosco" className="hero clearfix">
        <div className="container d-flex h-100">
          <div className="row justify-content-center align-self-center">
            <div className="col-md-3 intro-img">
              <img src={ img_contato } alt="" className="img-fluid"/>
            </div>

            <div className="col-md-9 intro-info">
              <h2>Fale Conosco</h2>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="faleconosco_form" className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-8 card">
                <p>Se você tem alguma dúvida, sugestão, crítica, proposta ou gostaria de reportar algum problema encontrado na plataforma, entre em contato conosco através de nosso email: <a className="email" href={this.state.mailto}>{ this.state.email }</a>.</p>
              </div>
            </div>
          </div>
        </section>

        <Newsletter/>
        
      </main>
    </React.Fragment>
    )
  }
}
export default FaleConosco