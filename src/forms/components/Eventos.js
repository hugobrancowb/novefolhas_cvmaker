import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import SingleInputTyped from './inputs/SingleInputTyped' 
import Calendar from 'react-calendar';

/* imagens */
import img_calendario from './../../assets/img/criar-novo-curriculo/ic-calendar_333.svg'

export class Eventos extends React.PureComponent {

  render() {

    const date_string = (data) => {
      let output = data.toLocaleDateString("pt-BR", {year: "numeric", month: "long", day: "2-digit"});
      output = output.substring(6);
      output = output.charAt(0).toUpperCase() + output.slice(1);
      
      return output;
    }

    return(
      <FormularioContext.Consumer>{context => (
        <div className="divisao-area">
          <div className="titulo-wrapper">
            <img src={ img_calendario } className="img-fluid" alt=""/>
            <h3>Eventos</h3>
            <p>Adicione suas participações em congressos, fóruns e simpósios.<br/>Considere também citar premiações ou indicações nesta seção.</p>
          </div>
          
          {/* Título do evento */}
          {context.state.eventos.map( (proj, id) => { return(
            <div className='evento' key={ id }>

              {/* Descrição do evento */}
              <SingleInputTyped
              name = 'descricao'
              label = 'Descrição do evento'
              value = { proj.descricao }
              id = { id }
              change = { context.change_eventos }
              type = 'txt'
              />

              {/* Data do evento */}
              <div className="duracao-evento half">
                <label>Data</label>
                <div className="input-group">
                  <input
                  readOnly
                  type = "text"
                  value = { date_string(proj.data) }
                  onClick = { (e) => {
                    e.preventDefault();
                    proj.show_data = proj.show_data ? false : true;
                    this.forceUpdate();
                  } }
                  className="form-control"/>
                  <div className="input-group-append">
                    <button
                    onClick = { (e) => {
                      e.preventDefault();
                      proj.show_data = proj.show_data ? false : true;
                      this.forceUpdate();
                    } }
                    className="btn btn-outline-secondary calendar-button" ><i class="fa fa-calendar"></i></button>
                  </div>
                </div>

                <Calendar
                  defaultView = 'year'
                  maxDetail = 'year'
                  name = 'data'
                  className = { proj.show_data === true ? '' : 'hide' }
                  data-id = { id }
                  value = { proj.data }
                  onChange = {(date) => {
                    const event = {
                      target: {
                        name: 'data',
                        value: date,
                        dataset: {id: id}
                      }
                    };
                    context.change_evento(event);
                    proj.show_data = proj.show_data ? false : true;
                    this.forceUpdate();
                  }}
                />

              </div>

              {/* Botão para remover este evento */}
              <div className="btn-wrapper">
                <button
                  data-id={ id }
                  className='btn btn-outline-secondary btn-bgcolor'
                  data-action='rmv'
                  onClick={ context.eventosAddRmv }
                >
                  Remover { proj.titulo || 'evento'}
                </button>
              </div>
              
            </div>
          )})}

          {/* Botão: Adicionar novo evento */}
          <div style={{display:'flex',width:'100%'}}>
            <button
            className='btn btn-outline-secondary'
            data-action='add'
            onClick={ context.eventosAddRmv }
            style={{margin: '10px auto'}}>
              Adicionar novo evento
            </button>
          </div>
        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Eventos