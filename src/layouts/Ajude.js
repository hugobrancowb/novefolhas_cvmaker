import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

/* imagens */
import img_homem_dev from './../assets/img/sobre/homem_dev.svg'
import img_picpay from './../assets/img/sobre/picpay-button.svg'

export class Ajude extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Nove Folhas | Ajude o projeto</title>
          <meta name="description"
          content="A Nove Folhas é uma plataforma desenvolvida de forma independente e sem receber qualquer financiamento privado com o objetivo de auxíliar seus usuários a produzirem currículos de forma rápida, prática e gratuita."/>
        </Helmet>
        <section id="sobre">
          <div className="container principal">
            <div className="row">
              <div className="col-md-6 imagem">                
                <img src={ img_homem_dev } alt="" className="img-fluid"/>
              </div>

              <div className="col-md-6 order-md-first">
                <h2 id="ajude-o-projeto">Ajude o projeto</h2>
                <p>Contribua com a quantia que quiser para manter a plataforma no ar, recompensar nosso trabalho já realizado e auxiliar nosso crescimento para podermos criar novos recursos para você! </p>
                <p style={{display:"flex"}}><a className="picpaylogo" href="https://app.picpay.com/user/hugobranco/" target="_blank" rel="noopener noreferrer"><img src={ img_picpay } alt="" className="img-fluid"/></a></p>
              </div>

            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">                
                <h2>Sobre o site</h2>
                <p>A Nove Folhas foi desenvolvida de forma independente e sem receber qualquer financiamento privado com o objetivo de auxíliar seus usuários a produzirem currículos de forma rápida, prática e gratuita. Você pode ajudar a manter o site no ar ao contribuir com o pagamento do domínio e servidor, além de recompensar o trabalho realizado pelo desenvolvedor desta plataforma.</p>
                <p>Operamos nossa plataforma conforme a nova Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709). Para saber mais, leia nosso <Link to='/termos-de-uso-e-politica-de-privacidade'>Termo de consentimento para uso e tratamento de dados pessoais</Link>.</p>
              </div>
              <div className="col-md-6">
                <h2>Créditos</h2>
                <p>

                  <li><a href="https://hugobrancowb.github.io/" target="_blank" rel="noopener noreferrer">Hugo Branco</a> - Desenvolvimento e design do site</li>

                  <li><a href="https://hugobrancowb.github.io/" target="_blank" rel="noopener noreferrer">Hugo Branco</a> - Design dos currículos</li>

                </p>
                <p>Para a criação desta plataforma, utilizamos os seguintes recursos de livre uso comercial:</p>
                <p>                  

                  <li>Ilustrações <a href="https://undraw.co/illustrations" target="_blank" rel="noopener noreferrer">unDraw</a></li>
                  
                  <li>Ilustrações <a href="https://www.blackillustrations.com/" target="_blank" rel="noopener noreferrer">Black Illustrations</a></li>
                  
                  <li>Ícones por <a href="https://freedesignresources.net/100-free-minimal-line-icons/" target="_blank" rel="noopener noreferrer">João Borges</a></li>
                  
                  <li>Foto de <a href="https://www.pexels.com/pt-br/foto/saint-patrick-s-saint-patrick-s-day-dia-de-sao-patricio-trevo-3876635/" target="_blank" rel="noopener noreferrer">Anna Shvets</a> - Pexels</li>
                  
                  <li>Foto de <a href="https://www.pexels.com/pt-br/foto/arvore-arvore-tropical-folha-folha-de-palmeira-2037993/" target="_blank" rel="noopener noreferrer">Jonas Von Werne</a> - Pexels</li>
                  
                  <li>Foto de <a href="https://unsplash.com/photos/70l1tDAI6rM" target="_blank" rel="noopener noreferrer">Chris Lee</a> - Unsplash</li>
                  
                  <li><a href="https://lokesh-coder.github.io/pretty-checkbox/" target="_blank" rel="noopener noreferrer">pretty checkbox</a></li>

                  <li>Assistência jurídica por <a href="https://www.lumiun.com/materiais/termo-consentimento-tratamento-dados-pessoais" target="_blank" rel="noopener noreferrer">Aléx de Oliveira</a></li>

                </p>
              </div>
            </div>
          </div>

        </section>
      </React.Fragment>
      )
  }
}

export default Ajude