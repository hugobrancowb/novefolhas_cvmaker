import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FormularioContext from '../layouts/FormularioContext'
import EscolherTema from './../forms/EscolherTema'
import Cabecalho from './../forms/components/Cabecalho'
import Educacao from './../forms/components/Educacao'
import Objetivo from './../forms/components/Objetivo'
import ExperienciaProfissional from './../forms/components/ExperienciaProfissional'
import ExperienciaAcademica from '../forms/components/ExperienciaAcademica'
import Idiomas from './../forms/components/Idiomas'
import Qualificacoes from './../forms/components/Qualificacoes'
import Eventos from './../forms/components/Eventos'
import Projetos from './../forms/components/Projetos'
import submitForm from './../forms/SubmitFunctions'

/* css */
import '..//assets/css/pretty-checkbox.min.css'
import '..//assets/css/formulario.css'

export class Formulario extends React.Component {
  componentDidMount() {
    this.setState({math_a: Math.floor(1 + Math.random() * (15 - 1)), math_b: Math.floor(1 + Math.random() * (15 - 1))});

    var loadScript = function (src) {
  
      var tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(tag);
    }
  
    loadScript('./../assets/js/html2pdf.bundle.min.js');
  }

  gerarCurriculo = (event) => {
    event.preventDefault();

    /* "i'm not a robot" math input */
    if((this.state.math_a + this.state.math_b) !== parseInt(this.state.math_value, 10)){
      console.log('erro de soma');
      return
    }

    /* dados de entrada */
    const dados = this.state;

    /* volta à página de dados pessoais para o usuário ver que sua ação está sendo processada */
    this.setState({step: 2, termos: false});

    /* gerar curriculo */
    submitForm(dados);

  }

  state = {
    step: 1,
    tema: '',
    termos: false,
    newsletter: true,
    pixel_linkedin: false,
    math_a: 0,
    math_b: 0,
    math_value: '',

    cabecalho: {
      nome: '',
      cidade: '',
      estado: 'AC',
      site: [{value: ''}],
      email: [{value: ''}],
      telefone: [{value: ''}],
    },

    educacao: [ /* ver respectiva função AddRmv */
    ],

    objetivo: '',

    experiencia_profissional: [ /* ver respectiva função AddRmv */
    ],

    experiencia_academica: [ /* ver respectiva função AddRmv */
    ],

    idiomas: [ /* ver respectiva função AddRmv */
    ],

    qualificacoes: [ /* ver respectiva função AddRmv */
    ],

    projetos: [ /* ver respectiva função AddRmv */
    ],

    eventos: [ /* ver respectiva função AddRmv */
    ],
  }

  prevStep = (event) => {
    event.preventDefault();
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
    let newStep = this.state.step - 1;
    this.setState({step: newStep});
  }

  nextStep = (event) => {
    event.preventDefault();
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
    let newStep = this.state.step + 1;
    this.setState({step: newStep});
  }
  
  escolher = (event) => {
    event.preventDefault();
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
    let newStep = this.state.step + 1;
    this.setState({tema: event.target.dataset.tema});
    this.setState({step: newStep});
  }

  /* Função para adicionar ou remover experiencia profissional de .state.experiencia_profissional' */
  experiencia_profissionalAddRmv = event => {
    event.preventDefault();
    let experienciaArr = this.state.experiencia_profissional;
    const modelo = {cargo: '', empresa: '', descricao: '', inicio: new Date(), show_inicio: false, fim: new Date(), show_fim: false, atual: false};

    /* Adicionar novo experiencia */
    if (event.target.dataset.action === 'add') {
      experienciaArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover experiencia */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < experienciaArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(experienciaArr[index]);
      }      
    }

    experienciaArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({experiencia_profissional: experienciaArr});
  }

  /* Função para adicionar ou remover experiencia academica de .state.experiencia_academica' */
  experiencia_academicaAddRmv = event => {
    event.preventDefault();
    let experienciaArr = this.state.experiencia_academica;
    const modelo = {titulo: '', instituicao: '', descricao: '', data: new Date(), show_data: false, carga: ''};

    /* Adicionar novo experiencia */
    if (event.target.dataset.action === 'add') {
      experienciaArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover experiencia */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < experienciaArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(experienciaArr[index]);
      }      
    }

    experienciaArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({experiencia_academica: experienciaArr});
  }

  /* Função para adicionar ou remover educação de .state.educacao' */
  educacaoAddRmv = event => {
    event.preventDefault();
    let experienciaArr = this.state.educacao;
    const modelo = {curso: '', instituicao: '', titulo: '', inicio: new Date(), show_inicio: false, fim: new Date(), show_fim: false, titulo_outro:'', atual: false};

    /* Adicionar novo experiencia */
    if (event.target.dataset.action === 'add') {
      experienciaArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover experiencia */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < experienciaArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(experienciaArr[index]);
      }      
    }

    experienciaArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({educacao: experienciaArr});
  }

  /* Função para adicionar ou remover qualificacoes de 'state.qualificacoes' */
  qualiAddRmv = event => {
    event.preventDefault();
    let qualificacoesArr = this.state.qualificacoes;
    const modelo = {value:''};

    /* Adicionar novo qualificacoes */
    if (event.target.dataset.action === 'add') {
      qualificacoesArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover qualificacoes */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < qualificacoesArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(qualificacoesArr[index]);
      }      
    }

    qualificacoesArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({qualificacoes: qualificacoesArr});
  }

  /* Função para adicionar ou remover idioma de 'state.idioma' */
  idiomasAddRmv = event => {
    event.preventDefault();
    let idiomasArr = this.state.idiomas;
    const modelo = {lingua:'', nivel:'basico'};

    /* Adicionar novo idiomas */
    if (event.target.dataset.action === 'add') {
      idiomasArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover idiomas */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < idiomasArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(idiomasArr[index]);
      }      
    }

    idiomasArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({idiomas: idiomasArr});
  }

  /* Função para adicionar ou remover projeto de 'state.projetos' */
  projetoAddRmv = event => {
    event.preventDefault();
    let projetosArr = this.state.projetos;
    const modelo = {titulo: '', descricao: '', link: ''};

    /* Adicionar novo projeto */
    if (event.target.dataset.action === 'add') {
      projetosArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover projeto */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < projetosArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(projetosArr[index]);
      }      
    }

    projetosArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({projetos: projetosArr});
  }

  /* Função para adicionar ou remover eventos de 'state.eventos' */
  eventosAddRmv = event => {
    event.preventDefault();
    let eventosArr = this.state.eventos;
    const modelo = {descricao: '', data: new Date(), show_data: false};

    /* Adicionar novo eventos */
    if (event.target.dataset.action === 'add') {
      eventosArr.push(modelo);
    } else if(event.target.dataset.action === 'rmv') {
    /* Remover eventos */
    let arrayNew = [];
    const deleteIndex = parseInt(event.target.dataset.id, 10);
    
    for (let index = 0; index < eventosArr.length; index++) {
      if(index !== deleteIndex) {
        arrayNew.push(eventosArr[index]);
      }      
    }

    eventosArr = [...arrayNew];

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({eventos: eventosArr});
  }

  /* Função para adicionar ou remover email de 'state.cabecalho.email' */
  cabecalhoAddRmv = event => {
    event.preventDefault();
    const cabecalhoOBJ = this.state.cabecalho;
    
    /* Adicionar novo email */
    if(event.target.dataset.action === 'add') {
      
      cabecalhoOBJ[event.target.name].push({value:''})

    } else if(event.target.dataset.action === 'rmv') {
    /* Remover email */
    
      const arrayNew = [];
      const deleteIndex = parseInt(event.target.dataset.id, 10);
    
      for (let index = 0; index < cabecalhoOBJ[event.target.name].length; index++) {
        if(index !== deleteIndex) {
          arrayNew.push(cabecalhoOBJ[event.target.name][index]);
        }      
      }

      cabecalhoOBJ[event.target.name] = arrayNew;

    } else {
      console.log('Invalid value for "event.target.action".');
    }

    this.setState({ cabecalho: cabecalhoOBJ});
  } /* Fim de AddRmv Email */

  sanitize = (string) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };

    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }

  /* [onChange] Edita valores dos inputs em tempo real */
  change_cabecalho = event => {
    const cabecalhoNew = {...this.state.cabecalho};

    if(!event.target.dataset.id){ /* Caso simples */
      cabecalhoNew[event.target.name] = event.target.value;
    } else { /* Caso array simples */

      cabecalhoNew[event.target.name][parseInt(event.target.dataset.id, 10)] = {value: event.target.value};

    }
    
    this.setState({cabecalho: cabecalhoNew});
  }
  change_objetivo = event => {
    let objetivoNew = event.target.value;
    this.setState({objetivo: objetivoNew});
  }
  change_educacao = event => {
    const educacaoNew = [...this.state.educacao];
    educacaoNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({educacao: educacaoNew});
  }
  change_experiencia_profissional = event => {
    const experiencia_profissionalNew = [...this.state.experiencia_profissional];
    experiencia_profissionalNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({experiencia_profissional: experiencia_profissionalNew});
  }
  change_experiencia_academica = event => {
    const experiencia_academicaNew = [...this.state.experiencia_academica];
    experiencia_academicaNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({experiencia_academica: experiencia_academicaNew});
  }
  change_idiomas = event => {
    const idiomasNew = [...this.state.idiomas];
    idiomasNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({idiomas: idiomasNew});
  }
  change_qualificacoes = event => {
    const qualificacoesNew = [...this.state.qualificacoes];
    qualificacoesNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({qualificacoes: qualificacoesNew});
  }
  change_projeto = event => {
    const projetosNew = [...this.state.projetos];
    projetosNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({projetos: projetosNew});
  }
  change_eventos = event => {
    const eventosNew = [...this.state.eventos];
    eventosNew[event.target.dataset.id][event.target.name] = event.target.value;
    this.setState({eventos: eventosNew});
  }

  render () {
    const stepMin = 1;
    const stepMax = 5;


    const nome_exibicao_raw = this.sanitize(this.state.cabecalho.nome);
    const nome_exibicao = nome_exibicao_raw.split(" ");

    const submitClassToggle = this.state.termos ? '' : ' desativado';

    return (
      <React.Fragment>
        <Helmet>
          <title>Nove Folhas | Criar currículo</title>
          <meta name="description"
          content="Crie currículos personalizados grátis e sem cadastro! A Nove Folhas oferece diferentes temas pra você construir seu currículo e melhorar sua primeira impressão profissional."/>
        </Helmet>
        <FormularioContext.Provider value={{
            state: this.state,
            change_cabecalho: this.change_cabecalho,
            change_objetivo: this.change_objetivo,
            change_experiencia_profissional: this.change_experiencia_profissional,
            change_educacao: this.change_educacao,
            change_experiencia_academica: this.change_experiencia_academica,
            change_idiomas: this.change_idiomas,
            change_qualificacoes: this.change_qualificacoes,
            change_projeto: this.change_projeto,
            change_eventos: this.change_eventos,
            experiencia_profissionalAddRmv: this.experiencia_profissionalAddRmv,
            educacaoAddRmv: this.educacaoAddRmv,
            experiencia_academicaAddRmv: this.experiencia_academicaAddRmv,
            idiomasAddRmv: this.idiomasAddRmv,
            projetoAddRmv: this.projetoAddRmv,
            eventosAddRmv: this.eventosAddRmv,
            clickAddRmv: this.cabecalhoAddRmv,
            qualiAddRmv: this.qualiAddRmv,
            }}>

          <section id="" className="formulario clearfix">
            <div className="container">
              <div className="row">
                
                { this.state.step === 1 &&
                  <div className="col-md-12 card">
                    <EscolherTema
                    escolher = { this.escolher }/>
                  </div>
                }

                { this.state.step > 1 &&
                  <div className="col-md-8 card">
                    <h2>Currículo de <span>{nome_exibicao[0]} {nome_exibicao[1]} {((nome_exibicao[1] === 'de') || (nome_exibicao[1] === 'da') || (nome_exibicao[1] === 'do')) && nome_exibicao[2]}</span></h2>

                    <form>

                      { this.state.step === 2 &&
                        <React.Fragment>
                          <Cabecalho/>
                          <Educacao/>
                          <Objetivo/>
                        </React.Fragment>
                      }
                      { this.state.step === 3 &&
                        <React.Fragment>
                          <ExperienciaProfissional/>
                          <ExperienciaAcademica/>
                        </React.Fragment>
                      }
                      { this.state.step === 4 &&
                        <React.Fragment>
                          <Eventos/>
                          <Projetos/>
                        </React.Fragment>
                      }
                      { this.state.step === stepMax &&
                        <React.Fragment>
                          <Idiomas/>
                          <Qualificacoes/>
                        </React.Fragment>
                      }
                      { this.state.step === stepMax &&
                        <div className="divisao-area">
                        
                        <label>Resolva a operação: { this.state.math_a } + { this.state.math_b } = ?</label>
                        <div className="input-group">
                        <input
                        type = "text"
                        value = { this.state.math_value }
                        onChange = { (e) => {this.setState({math_value: e.target.value})} }
                        className="form-control"/>
                        </div>


                          <div className="pretty p-default">
                            <input type="checkbox"
                            onChange={(e) => {this.setState({termos: e.target.checked})}}
                            name='termos'
                            checked={ this.state.termos }/>
                              <div className="state p-success">
                                <label>
                                  Li e concordo com o
                                </label>
                              </div>
                          </div>
                          <label id="termos"><Link to='/termos-de-uso-e-politica-de-privacidade' target='_blank'>Termo de consentimento para uso e tratamento de dados pessoais</Link> conforme a nova Lei Geral de Proteção de Dados Pessoais.</label>

                          <div className="pretty p-default">
                            <input type="checkbox"
                            onChange={(e) => {this.setState({newsletter: e.target.checked})}}
                            name='newsletter'
                            checked={ this.state.newsletter }/>
                              <div className="state p-success">
                                <label>
                                  Desejo receber emails com promoções, sorteios e novidades da Nove Folhas ou suas parceiras (não mandaremos spam nem divulgaremos seu email para outras empresas conforme a nova Lei Geral de Proteção de Dados Pessoais).
                                </label>
                              </div>
                          </div>

                        </div>
                      }

                      <div className="btn-nav-wrapper">
                      { this.state.step > stepMin &&
                        <button className="btn" onClick={ this.prevStep } > Voltar </button>
                      }
                      { ((this.state.step > stepMin) && (this.state.step < stepMax)) && /* DEV: trocar === por < para exibir */
                        <button className="btn" onClick={ this.nextStep } > Avançar</button>
                      }                      
                      { this.state.step === stepMax &&
                        <button
                        className={`btn${submitClassToggle}`}
                          onClick={ this.gerarCurriculo }>
                            Gerar Currículo
                        </button>
                      }
                      </div>
                    </form>
                    { this.state.pixel_linkedin &&
                      <img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=1956146&conversionId=2149738&fmt=gif"/>
                    }
                  </div>
                }

              </div>
            </div>
          </section>

        </FormularioContext.Provider>
        <div id="cvgen" style={{display:'none'}}></div>
      </React.Fragment>
    )
  }
}

export default Formulario