import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import SingleInputTyped from './inputs/SingleInputTyped'
import SingleInputText from './inputs/SingleInputText'
import Calendar from 'react-calendar';

/* imagens */
import img_pasta_profissional from './../../assets/img/criar-novo-curriculo/ic-bag_333.svg'

export class ExperienciaProfissional extends React.PureComponent {

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
            <img src={img_pasta_profissional} className="img-fluid" alt=""/>
            <h3>Experiência Profissional</h3>
          </div>
          
          {context.state.experiencia_profissional.map( (exp, id) => { return(
            <div className='experiencia' key={ id }>

              {/* Cargo da experiência */}
              <SingleInputTyped
              name = 'cargo'
              label = 'Cargo'
              value = { exp.cargo || '' }
              id = { id }
              change = { context.change_experiencia_profissional }
              type = 'txt'
              />

              {/* Empresa da experiência */}
              <SingleInputTyped
              name = 'empresa'
              label = 'Empresa ou Instituição'
              value = { exp.empresa || '' }
              id = { id }
              change = { context.change_experiencia_profissional }
              type = 'txt'
              />

              {/* Duração da experiência */}
              {/* inicio */}
              <div className="duracao-experiencia_profissional half">
                <label>Início</label>
                <div className="input-group">
                  <input
                  readOnly
                  type = "text"
                  value = { date_string(exp.inicio) }
                  onClick = { (e) => {
                    e.preventDefault();
                    exp.show_inicio = exp.show_inicio ? false : true;
                    this.forceUpdate();
                  } }
                  className="form-control"/>
                  <div className="input-group-append">
                    <button
                    onClick = { (e) => {
                      e.preventDefault();
                      exp.show_inicio = exp.show_inicio ? false : true;
                      this.forceUpdate();
                    } }
                    className="btn btn-outline-secondary calendar-button" ><i class="fa fa-calendar"></i></button>
                  </div>
                </div>

                <Calendar
                  defaultView = 'year'
                  maxDetail = 'year'
                  name = 'inicio'
                  className = { exp.show_inicio === true ? '' : 'hide' }
                  data-id = { id }
                  value = { exp.inicio }
                  onChange = {(date) => {
                    const event = {
                      target: {
                        name: 'inicio',
                        value: date,
                        dataset: {id: id}
                      }
                    };
                    context.change_experiencia_profissional(event);
                    exp.show_inicio = exp.show_inicio ? false : true;
                    this.forceUpdate();
                  }}
                />

              </div>

              {/* fim */}              
              <div className="duracao-experiencia_profissional">
                <label>Fim</label>
                <div className="half_com_checkbox">
                  <div className="input-group">
                    <input
                    readOnly
                    type="text"
                    value = { exp.atual ? 'Atual' : date_string(exp.fim) }
                    onClick = { (e) => {
                      e.preventDefault();

                      exp.show_fim = (exp.show_fim && !exp.atual) ? false : true;
                      
                      this.forceUpdate();
                    } }
                    className="form-control"/>
                    <div className = 'input-group-append'>
                      <button
                      onClick = { (e) => {
                        e.preventDefault();
                      
                        if(!exp.atual) {
                          exp.show_fim = (exp.show_fim) ? false : true;
                        }

                        this.forceUpdate();
                      } }
                      className={ exp.atual ? 'btn btn-outline-secondary calendar-button atual' : 'btn btn-outline-secondary calendar-button'}
                      ><i className="fa fa-calendar"></i></button>
                    </div>
                  </div>
                  
                  <div className="pretty p-default">
                    <input type="checkbox"
                    onChange={ () => {
                      exp.atual = exp.atual ? false : true;
                      exp.show_fim = false;
                      
                      const event = {
                        target: {
                          name: 'atual',
                          value: exp.atual,
                          dataset: {id: id}
                        }
                      };

                      context.change_educacao(event);                      
                    }}
                    name = 'atual'
                    data-id = { id }
                    checked={ exp.atual }
                    />
                      <div className="state p-success">
                        <label>
                          Ainda ocupo esta posição.
                        </label>
                      </div>
                  </div>
                </div>

                <Calendar
                  defaultView = 'year'
                  maxDetail = 'year'
                  name = 'fim'
                  className = { (exp.show_fim && !exp.atual) ? '' : 'hide' }
                  data-id = { id }
                  value={ exp.fim }
                  onChange = {(date) => {
                    const event = {
                      target: {
                        name: 'fim',
                        value: date,
                        dataset: {id: id}
                      }
                    };
                    context.change_educacao(event);
                    exp.show_fim = exp.show_fim ? false : true;
                    this.forceUpdate();
                  }}
                />

              </div>
              {/* Fim da Duração */}

              {/* Descrição da experiência */}
              <SingleInputText
              name = 'descricao'
              label = 'Descrição do cargo'
              placeholder = 'Em que áreas você trabalhou? Que tarefas faziam parte de seu cotidiano?'
              value = { exp.descricao || ''}
              id = { id }
              change = { context.change_experiencia_profissional }
              />

              {/* Botão para remover este experiencia */}
              <div className="btn-wrapper">
                <button
                  data-id={ id }
                  className='btn btn-outline-secondary'
                  data-action='rmv'
                  onClick={ context.experiencia_profissionalAddRmv }>
                    Remover { exp.cargo || 'experiência'}
                </button>
              </div>
              
            </div>
          )})}

          {/* Botão: Adicionar nova experiência */}
          <div style={{display:'flex',width:'100%'}}>
            <button
            className='btn btn-outline-secondary'
            data-action='add'
            onClick={ context.experiencia_profissionalAddRmv }
            style={{margin: '10px auto'}}>
              Adicionar nova experiência
            </button>
          </div>
        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default ExperienciaProfissional