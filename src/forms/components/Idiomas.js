import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import img_flag from './../../assets/img/criar-novo-curriculo/ic-flag_333.svg'

export class Idiomas extends React.PureComponent {

  render() {
    return(
      <FormularioContext.Consumer>{context => (
        <div className="divisao-area">
          <div className="titulo-wrapper"><img src={ img_flag } className="img-fluid" alt=""/><h3>Idiomas</h3></div>
          
          {context.state.idiomas.map( (idioma, id) => {return(
          <div className="input-group mb-3" key={ id }>
            <input
            value={ idioma.lingua }
            data-id = { id }
            onChange={ context.change_idiomas }
            name='lingua'
            type = 'txt'
            className = "form-control"
            />
            <select className="custom-select"
            onChange={ context.change_idiomas }
            value={ idioma.nivel }
            name='nivel'
            data-id={ id }>
              <option value="Básico">Básico</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
              <option value="Fluente">Fluente</option>
            </select>

            <div className="input-group-append">
              <button className="btn btn-outline-secondary"
              data-action='rmv'
              //name={ name }
              onClick={ context.idiomasAddRmv }
              data-id={ id }
              type="button">
                Apagar
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
          onClick={ context.idiomasAddRmv }
          style={{margin: '10px auto'}}>
            Adicionar novo idioma
          </button>
        </div>
        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Idiomas