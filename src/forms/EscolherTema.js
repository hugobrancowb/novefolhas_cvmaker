import React from 'react'

/* css */
import '..//assets/cv/cv_estilos.css'

/* fontes */
  /* Trevo */
  import '..//assets/cv/FiraSans-Bold.ttf'
  import '..//assets/cv/FiraSans-Medium.ttf'
  import '..//assets/cv/FiraSans-MediumItalic.ttf'
  import '..//assets/cv/FiraSans-Regular.ttf'
  import '..//assets/cv/FiraSans-SemiBold.ttf'

  /* Costela-de-Adão */
  import '..//assets/cv/SueEllenFrancisco-Regular.ttf'  
  import '..//assets/cv/Pompiere-Regular.ttf'
  import '..//assets/cv/SourceSansPro-Light.ttf'
  import '..//assets/cv/SourceSansPro-LightItalic.ttf'
  import '..//assets/cv/SourceSansPro-Regular.ttf'
  import '..//assets/cv/SourceSansPro-SemiBold.ttf'  
  
  /* Palmeira */
  import '..//assets/cv/RobotoSlab-Regular.ttf'
  import '..//assets/cv/RobotoSlab-Medium.ttf'
  import '..//assets/cv/Roboto-Medium.ttf'
  import '..//assets/cv/Roboto-Regular.ttf'
  import '..//assets/cv/RobotoCondensed-Light.ttf'
  import '..//assets/cv/RobotoCondensed-LightItalic.ttf'
  import '..//assets/cv/RobotoCondensed-Regular.ttf'

/* imagens */
import img_trevo from './../assets/cv/exemplos/trevo_exemplo.jpg'
import img_costela from './../assets/cv/exemplos/costela_exemplo.jpg'
import img_palmeira from './../assets/cv/exemplos/palmeira_exemplo.jpg'
import pdf_trevo from './../assets/cv/exemplos/trevo_exemplo.pdf'
import pdf_costela from './../assets/cv/exemplos/costela_exemplo.pdf'
import pdf_palmeira from './../assets/cv/exemplos/palmeira_exemplo.pdf'

export class EscolherTema extends React.Component {
  state = {
    temas: [
      {nome: 'palmeira', titulo: 'Palmeira', img_preview: img_palmeira, pdf_preview: pdf_palmeira},
      {nome: 'trevo', titulo: 'Trevo', img_preview: img_trevo, pdf_preview: pdf_trevo},
      {nome: 'costela', titulo: 'Costela-de-Adão', img_preview: img_costela, pdf_preview: pdf_costela},
    ],

    escolha: 0
  }

  render() {
    const temas = this.state.temas;

    return (
      <React.Fragment>
        <div className="container" id="EscolherTema">
          <h2>Criar currículo</h2>
          <h3>Escolha um dos temas abaixo para prosseguir</h3>
          <div className="row tema-cell" >

          {temas.map((tema, id) => {
            return(              
                <div key={ id } className="col-md-4 info-col"
                >
                  <img
                  src={ tema.img_preview }
                  data-id={ id }
                  data-tema={ tema.nome }
                  onClick={ this.props.escolher }
                  alt=""
                  className="img-fluid"/>

                  <div className="info">
                    <h3>{ tema.titulo }</h3>

                    <div className="btn-wrapper">
                      <button className="btn btn-outline-secondary"
                      data-id={ id }
                      data-tema={ tema.nome }
                      onClick={ this.props.escolher }
                      type="button">
                        Escolher
                      </button>
                      <button className="btn btn-outline-secondary"
                      onClick={ () => {window.open(tema.pdf_preview, "_blank")} }
                      type="button">
                        Exemplo
                      </button>
                    </div>
                  </div>

                </div>
          )})}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default EscolherTema