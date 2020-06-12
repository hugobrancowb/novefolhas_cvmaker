import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import SingleInputText from './inputs/SingleInputText'
import img_alvo from './../../assets/img/criar-novo-curriculo/ic-bullseye_333.svg'

export class Objetivo extends React.PureComponent {

  render() {
    return(
      <FormularioContext.Consumer>{context => (
        <div className="divisao-area">
          <div className="titulo-wrapper">
            <img src={ img_alvo } className="img-fluid" alt=""/>
            <h3>Objetivo</h3>
            <p>Procura por uma vaga específica? Tem preferência por alguma área?</p>
          </div>

          {/* Descrição do projeto */}
          <SingleInputText
          name = 'objetivo'
          label = ''
          value = { context.state.objetivo }
          change = { context.change_objetivo }
          />

        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Objetivo