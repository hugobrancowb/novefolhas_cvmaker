import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Newsletter from './../components/Newsletter'

/* imagens */
import img_mulher_intro from './../assets/img/intro-img.svg'
import img_grid from './../assets/img/criar-novo-curriculo/ic-grid.svg'
import img_lapis from './../assets/img/criar-novo-curriculo/ic-write.svg'
import img_alvo from './../assets/img/criar-novo-curriculo/ic-bullseye.svg'
import img_homem_negocios from './../assets/img/businessman.svg'

export class Home extends React.Component {
  
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Nove Folhas</title>
          <meta name="description"
          content="Crie currículos personalizados grátis e sem cadastro! A Nove Folhas oferece diferentes temas pra você construir seu currículo e melhorar sua primeira impressão profissional."/>
        </Helmet>
        {/* HERO / PRINCIPAL */}
        <section id="hero_home" className="hero clearfix">
          <div className="container d-flex h-100">
            <div className="row justify-content-center align-self-center">
              <div className="col-md-5 intro-info order-md-first order-last">
                <h2>Crie currículos personalizados <span>grátis e sem cadastro</span></h2>
                <div>
                  <Link to="/criar-curriculo" className="btn-get-started scrollto">Criar agora</Link>
                </div>
              </div>

              <div className="col-md-7 intro-img order-md-last order-first">
                <img src={ img_mulher_intro } alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </section>

        <main id="main">

          {/* VANTAGENS (?) */}
          <div className="clearfix separador-svg">
            <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 58.8471V74.0001H1440V29.0001C1091.55 83.5344 859.732 65.6064 640.226 48.6301C442.306 33.3233 254.391 18.7903 0 58.8471Z" fill="#91E963"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 58.3222V57.2948C208.216 8.25615 426.827 25.4526 654.802 43.3856C675.305 44.9984 695.884 46.6172 716.538 48.1943C946.308 65.7391 1192.08 59.6408 1440 0.380005V1.40815C1192.03 60.6482 946.229 66.736 716.462 49.1914C695.817 47.615 675.248 45.9971 654.757 44.3854L654.751 44.3849C426.657 26.4437 208.124 9.25461 0 58.3222Z" fill="#2F2E41"/>
            </svg>
          
          </div>

          <section id="features_criarcurriculo" className="features">
            <div className="container">
              <div className="row feature-item">

                <div className="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                  <div className="img-wrap"><img src={ img_grid } className="img-fluid" alt=""/></div>
                    <h4>Preencha apenas os campos que você deseja exibir</h4>
                    <p>Utilizando nosso modelo, você preenche apenas aquilo que deseja exibir em seu currículo. Basta deixar de preencher os campos que não deseja exibir em sua versão final.</p>
                  </div>

                  <div className="col-md-4 wow bounceInUp" data-wow-duration="1.4s" data-wow-delay="0.1s">
                    <div className="img-wrap"><img src={ img_lapis } className="img-fluid" alt=""/></div>
                    <h4>Escolha um dos nossos modelos personalizáveis</h4>
                    <p>Os modelos disponíveis podem representar diferentes características do seu perfil. Escolha aquele que é a sua cara!</p>
                  </div>

                  <div className="col-md-4 wow bounceInUp" data-wow-duration="1.4s" data-wow-delay="0.2s">
                    <div className="img-wrap"><img src={ img_alvo } className="img-fluid" alt=""/></div>
                    <h4>Currículos simples e objetivos</h4>
                    <p>Os currículos possuem design simplificado para facilitar a leitura rápida dos recrutadores. Assim, é possível destacar suas qualidades e forma simples e direta.</p>
                  </div>

                </div>
              </div>
            </section>

          <div className="clearfix separador-svg">
          <svg viewBox="0 0 1440 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M640.584 42.317C866.182 60.747 1114.19 81.0081 1440 30.5011V10.0001C1091.55 64.5344 859.732 46.6064 640.226 29.6301C442.306 14.3233 254.391 -0.209709 0 39.8471V59.3895C225.864 8.43673 422.779 24.5235 640.584 42.317Z" fill="#F2F2F2"/>
            <path d="M0 6.10352e-05V39.8471C254.391 -0.209713 442.306 14.3233 640.226 29.6301C859.732 46.6064 1091.55 64.5344 1440 10.0001V0L0 6.10352e-05Z" fill="#3CDDA7"/>
          </svg>
          </div>

          {/*
          */}

          {/* PRIMEIRA IMPRESSÃO */}
          <section id="features" className="features">
            <div className="container">

              <div className="row feature-item">
                <div className="col-md-12 col-lg-6 wow fadeInUp">
                  <img src={ img_homem_negocios } className="img-fluid" alt=""/>
                </div>

                <div className="col-md-12 col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                  <h4>Melhore sua primeira impressão</h4>
                  <p>
                    Nossos modelos foram desenvolvidos para destacar suas qualidades de maneira simples e objetiva, ao mesmo tempo em que evita-se os modelos padrões dos editores de texto.<br/>
                    Destaque-se entre dezenas de currículos apresentando-se de forma diferenciada e única.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* NEWSLETTER */}
          <Newsletter/>
          
        </main>
      </React.Fragment>
    )
  }
}
export default Home