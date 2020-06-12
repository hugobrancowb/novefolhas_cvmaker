import React from 'react'
import FormularioContext from '../../layouts/FormularioContext'
import SingleInputTyped from './inputs/SingleInputTyped'
import SingleInputText from './inputs/SingleInputText'
import img_pasta from './../../assets/img/criar-novo-curriculo/ic-folders_333.svg'

export class Projetos extends React.PureComponent {
  
  render() {
    return(
      <FormularioContext.Consumer>{context => (
        <div className="divisao-area">
          <div className="titulo-wrapper">
            <img src={ img_pasta } className="img-fluid" alt=""/>
            <h3>Projetos</h3>
            <p>Cite trabalhos relevantes que possam ser decisivos para os cargos que deseja.<br/>Recomendamos utilizar até 280 caracteres para descrever seu projeto (ou seja, o ideal é caber tudo em um <i>tweet</i>).</p>
          </div>
          
          {/* Título do projeto */}
          {context.state.projetos.map( (proj, id) => { return(
            <div className='projeto' key={ id }>

              {/* Título do projeto */}
              <SingleInputTyped
              name = 'titulo'
              label = 'Título do projeto'
              value = { proj.titulo }
              id = { id }
              change = { context.change_projeto }
              type = 'txt'
              />

              {/* Descrição do projeto */}
              <SingleInputText
              name = 'descricao'
              label = 'Descrição do projeto'
              value = { proj.descricao }
              id = { id }
              change = { context.change_projeto }
              />

              {/* Link para o projeto */}
              <SingleInputTyped
              name = 'link'
              label = 'Link para o projeto'
              value = { proj.link }
              placeholder = 'Ex.: link.com.br'
              id = { id }
              change = { context.change_projeto }
              type = 'txt'
              />

              {/* Botão para remover este projeto */}
              <div className="btn-wrapper">
                <button
                  data-id={ id }
                  className='btn btn-outline-secondary btn-bgcolor'
                  data-action='rmv'
                  onClick={ context.projetoAddRmv }
                >
                  Remover { proj.titulo || 'projeto'}
                </button>
              </div>
              
            </div>
          )})}

          {/* Botão: Adicionar novo projeto */}
          <div style={{display:'flex',width:'100%'}}>
            <button
            className='btn btn-outline-secondary'
            data-action='add'
            onClick={ context.projetoAddRmv }
            style={{margin: '10px auto'}}>
              Adicionar novo projeto
            </button>
          </div>
        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Projetos