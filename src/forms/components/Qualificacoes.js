import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import img_computador from './../../assets/img/criar-novo-curriculo/ic-computer_333.svg'

export class Qualificacoes extends React.PureComponent {

  render() {
    return(
      <FormularioContext.Consumer>{context => (
        <div className="divisao-area">
          <div className="titulo-wrapper"><img src={ img_computador } className="img-fluid" alt=""/>
            <h3>Habilidades</h3>
            <p>Este campo pode ser utilizado para listar seus conhecimentos de <i>softwares</i>, plataformas ou linguagens de programação relacionados à sua área de atuação.</p>
          </div>
          
          {context.state.qualificacoes.map( (quali, id) => {return(
          <div className="input-group mb-3" key={ id }>
            <input
            value={ quali.value }
            data-id = { id }
            key = { id }
            onChange={ context.change_qualificacoes }
            name='value'
            type = 'txt'
            className = "form-control"
            />

            <div className="input-group-append">
              <button className="btn btn-outline-secondary"
              data-action='rmv'
              //name={ name }
              onClick={ context.qualiAddRmv }
              data-id={ id }
              type="button">
                Remover
              </button>
            </div>            
          </div>
          )})          
        }
        {/* Botão: Adicionar nova qualificacao */}
        <div style={{display:'flex',width:'100%'}}>
            <button
            className='btn btn-outline-secondary'
            data-action='add'
            onClick={ context.qualiAddRmv }
            style={{margin: '10px auto'}}>
              Adicionar nova habilidade
            </button>
          </div>
        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Qualificacoes