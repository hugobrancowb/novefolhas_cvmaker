import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import SingleInputTyped from './inputs/SingleInputTyped'
import SingleInputText from './inputs/SingleInputText'
import Calendar from 'react-calendar';

/* imagens */
import img_lapis from './../../assets/img/criar-novo-curriculo/ic-write_333.svg'

export class ExperienciaAcademica extends React.PureComponent {

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
            <img src={img_lapis} className="img-fluid" alt=""/>
            <h3>Atividades de aperfeiçoamento</h3>
            <p>Descreva aqui cursos, oficinas e workshops que agregaram à sua bagagem de conhecimentos.<br/>Em caso de projetos de pesquisa, preencha quando começou e cite a duração total na descrição.</p>
          </div>
          
          {context.state.experiencia_academica.map( (exp, id) => { return(
            <div className='experiencia' key={ id }>

              {/* Título da experiência */}
              <SingleInputTyped
              name = 'titulo'
              label = 'Título'
              value = { exp.titulo || '' }
              id = { id }
              change = { context.change_experiencia_academica }
              type = 'txt'
              />

              {/* Empresa da experiência */}
              <SingleInputTyped
              name = 'instituicao'
              label = 'Instituição ou Empresa'
              value = { exp.instituicao || '' }
              id = { id }
              change = { context.change_experiencia_academica }
              type = 'txt'
              />

              {/* Data da experiência */}
              <div className="duracao-experiencia_academica half">
                <label>Data</label>
                <div className="input-group">
                  <input
                  readOnly
                  type = "text"
                  value = { date_string(exp.data) }
                  onClick = { (e) => {
                    e.preventDefault();
                    exp.show_data = exp.show_data ? false : true;
                    this.forceUpdate();
                  } }
                  className="form-control"/>
                  <div className="input-group-append">
                    <button
                    onClick = { (e) => {
                      e.preventDefault();
                      exp.show_data = exp.show_data ? false : true;
                      this.forceUpdate();
                    } }
                    className="btn btn-outline-secondary calendar-button" ><i class="fa fa-calendar"></i></button>
                  </div>
                </div>

                <Calendar
                  defaultView = 'year'
                  maxDetail = 'year'
                  name = 'data'
                  className = { exp.show_data === true ? '' : 'hide' }
                  data-id = { id }
                  value = { exp.data }
                  onChange = {(date) => {
                    const event = {
                      target: {
                        name: 'data',
                        value: date,
                        dataset: {id: id}
                      }
                    };
                    context.change_experiencia_academica(event);
                    exp.show_data = exp.show_data ? false : true;
                    this.forceUpdate();
                  }}
                />

              </div>

              {/* Carga horária */}
              <div className="input-group carga-experiencia_academica half">
                <label>Carga horária</label>
                <div className="input-group">
                  <input
                  className = 'form-control'
                  placeholder = 'apenas numeros'
                  type = 'txt'
                  name = 'carga'
                  id = { id }
                  value = { exp.carga }
                  onChange = { context.change_experiencia_academica }
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">horas</span>
                  </div>
                </div>
              </div>

              {/* Descrição da experiência */}
              <SingleInputText
              name = 'descricao'
              label = 'Descrição da experiência'
              value = { exp.descricao || ''}
              id = { id }
              change = { context.change_experiencia_academica }
              />

              {/* Botão para remover este experiencia */}
              <div className="btn-wrapper">
                <button
                  data-id={ id }
                  className='btn btn-outline-secondary'
                  data-action='rmv'
                  onClick={ context.experiencia_academicaAddRmv }>
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
            onClick={ context.experiencia_academicaAddRmv }
            style={{margin: '10px auto'}}>
              Adicionar nova experiência
            </button>
          </div>
        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default ExperienciaAcademica