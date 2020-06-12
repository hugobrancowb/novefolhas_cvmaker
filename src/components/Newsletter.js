import React from 'react'
import axios from 'axios';

export class Newsletter extends React.Component {
  state = {
    email: ''
  }

  render() {
    return (
      <section id="newsletter" className="newsletter wow fadeInUp">
        <div className="container">
          <div className="row">

            <div className="col-sm-12 col-md-5 text-center text-lg-right">
              <h3>assine nossa<br/><span>Newsletter</span></h3>
            </div>

            <div id="mc_embed_signup" className="col-sm-12 col-md-5 text-center text-lg-left">
              <p>Fique por dentro de nossas novidades. Em breve teremos novos modelos e recursos para te ajudar a conquistar novas oportunidades!</p>

              <form
              action="https://gmail.us19.list-manage.com/subscribe/post?u=a106b3a728860186b23cb5d3b&amp;id=862aa4cd35"
              className="validate"
              id="mc-embedded-subscribe-form"
              method="post"
              name="mc-embedded-subscribe-form"
              noValidate
              target="_blank"
              role="form">

                <div id="mc_embed_signup_scroll" className="form-group">
                  <div className="mc-field-group input-group">

                    <input
                    type="email"
                    name="EMAIL"
                    className="form-control required email"
                    placeholder="Seu endereço de email"
                    id="mce-EMAIL"
                    value={ this.state.email }
                    onChange={ (e) => { this.setState({ email: e.target.value }) } }
                    />
                    <div style={{position:"absolute",left:"-5000px"}} aria-hidden="true">
                      <input type="text" name="b_a106b3a728860186b23cb5d3b_862aa4cd35" tabIndex="-1"
                      />                      
                    </div>

                    <div className="input-group-append">
                      
                      <input
                      type="submit"
                      value="Assinar"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button btn btn-outline-secondary"
                      />
                    </div>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                  <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                </div>
              </form>
              
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Newsletter