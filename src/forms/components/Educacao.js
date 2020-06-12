import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import SingleInputTyped from './inputs/SingleInputTyped'
import Calendar from 'react-calendar';

/* css */
import 'react-calendar/dist/Calendar.css';

/* imagens */
import img_alvo from './../../assets/img/criar-novo-curriculo/ic-bullseye_333.svg'

export class Educacao extends React.Component {
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
            <img src={ img_alvo } className="img-fluid" alt=""/>
            <h3>Educação</h3>
            <p>Adicione aqui seus cursos técnicos, graduações, etc.<br/>Cursos de menor duração podem ser adicionados a seguir na seção <i>Atividades de aperfeiçoamento.</i></p>
          </div>

          {context.state.educacao.map( (edu, id) => { return(
            <div className='educacao' key={ id }>

              {/* Curso */}
              <SingleInputTyped
              name = 'curso'
              label = 'Curso'
              value = { edu.curso }
              id = { id }
              change = { context.change_educacao }
              type = 'txt'
              />

              <label>Título</label>
              <div className='educacao_titulo'>
                <div className="input-group titulo">
                  <select className="custom-select"
                  onChange={ context.change_educacao }
                  value={ edu.titulo }
                  name='titulo'
                  data-id={ id }>
                    <option value="Técnico">Técnico</option>
                    <option value="Bacharel">Bacharel</option>
                    <option value="Mestre">Mestre</option>
                    <option value="Doutor">Doutor</option>
                    <option value="Pós-graduado">Pós-graduado</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {edu.titulo === "Outro" && 
                    <SingleInputTyped
                    name = 'titulo_outro'
                    label = ''
                    value={ edu.titulo_outro }
                    id = { id }
                    change = { context.change_educacao }
                    type = 'txt'
                    />
                  }
                </div>
              </div>

              {/* Instituição */}
              <SingleInputTyped
              name = 'instituicao'
              label = 'Instituição'
              value = { edu.instituicao }
              id = { id }
              change = { context.change_educacao }
              type = 'txt'
              />
              {/* {curso: '', instituicao: '', titulo: '', inicio: '', fim: ''} */}

              {/* Duração do curso */}
              {/* inicio */}
              <div className="duracao-educacao half">
                <label>Início</label>
                <div className="input-group">
                  <input
                  readOnly
                  type = "text"
                  value = { date_string(edu.inicio) }
                  onClick = { (e) => {
                    e.preventDefault();
                    edu.show_inicio = edu.show_inicio ? false : true;
                    this.forceUpdate();
                  } }
                  className="form-control"/>
                  <div className="input-group-append">
                    <button
                    onClick = { (e) => {
                      e.preventDefault();
                      edu.show_inicio = edu.show_inicio ? false : true;
                      this.forceUpdate();
                    } }
                    className="btn btn-outline-secondary calendar-button" ><i className="fa fa-calendar"></i></button>
                  </div>
                </div>

                <Calendar
                  defaultView = 'year'
                  maxDetail = 'year'
                  name = 'inicio'
                  className = { edu.show_inicio === true ? '' : 'hide' }
                  data-id = { id }
                  value = { edu.inicio }
                  onChange = {(date) => {
                    const event = {
                      target: {
                        name: 'inicio',
                        value: date,
                        dataset: {id: id}
                      }
                    };
                    context.change_educacao(event);
                    edu.show_inicio = edu.show_inicio ? false : true;
                    this.forceUpdate();
                  }}
                />

              </div>

              {/* fim */}              
              <div className="duracao-educacao">
                <label>Fim</label>
                <div className="half_com_checkbox">
                  <div className="input-group">
                    <input
                    readOnly
                    type="text"
                    value = { edu.atual ? 'Cursando' : date_string(edu.fim) }
                    onClick = { (e) => {
                      e.preventDefault();

                      edu.show_fim = (edu.show_fim && !edu.atual) ? false : true;
                      
                      this.forceUpdate();
                    } }
                    className="form-control"/>
                    <div className = 'input-group-append'>
                      <button
                      onClick = { (e) => {
                        e.preventDefault();
                      
                        if(!edu.atual) {
                          edu.show_fim = (edu.show_fim) ? false : true;
                        }

                        this.forceUpdate();
                      } }
                      className={ edu.atual ? 'btn btn-outline-secondary calendar-button atual' : 'btn btn-outline-secondary calendar-button'}
                      ><i className="fa fa-calendar"></i></button>
                    </div>
                  </div>
                  
                  <div className="pretty p-default">
                    <input type="checkbox"
                    onChange={ () => {
                      edu.atual = edu.atual ? false : true;
                      edu.show_fim = false;
                      
                      const event = {
                        target: {
                          name: 'atual',
                          value: edu.atual,
                          dataset: {id: id}
                        }
                      };

                      context.change_educacao(event);                      
                    }}
                    name = 'atual'
                    data-id = { id }
                    checked={ edu.atual }
                    />
                      <div className="state p-success">
                        <label>
                          Ainda estou cursando.
                        </label>
                      </div>
                  </div>
                </div>

                <Calendar
                  defaultView = 'year'
                  maxDetail = 'year'
                  name = 'fim'
                  className = { (edu.show_fim && !edu.atual) ? '' : 'hide' }
                  data-id = { id }
                  value={ edu.fim }
                  onChange = {(date) => {
                    const event = {
                      target: {
                        name: 'fim',
                        value: date,
                        dataset: {id: id}
                      }
                    };
                    context.change_educacao(event);
                    edu.show_fim = edu.show_fim ? false : true;
                    this.forceUpdate();
                  }}
                />

              </div>
              {/* Fim da Duração */}

              {/* Botão para remover este curso */}
              <div className="btn-wrapper">
                <button
                  data-id={ id }
                  className='btn btn-outline-secondary btn-bgcolor'
                  data-action='rmv'
                  onClick={ context.educacaoAddRmv }
                >
                  Remover { edu.curso || 'curso'}
                </button>
              </div>
              
            </div>
          )})}

          {/* Botão: Adicionar nova educação */}
          <div style={{display:'flex',width:'100%'}}>
            <button
            className='btn btn-outline-secondary'
            data-action='add'
            onClick={ context.educacaoAddRmv }
            style={{margin: '10px auto'}}>
              Adicionar novo curso
            </button>
          </div>

        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Educacao