import React from 'react';

export default React.createContext({

  cabecalho: {
    nome: '',
    endereco: '',
    site: [{value: ''}],
    email: [{value: ''}],
    telefone: [{value: ''}],
  },

  objetivo: '',

  experiencia: [
  ],

  idiomas: [
    {lingua: '', nivel: 'basico'}
  ],

  qualificacoes: [
  ],

  projetos: [
    {titulo: '', descricao: '', link: ''}
  ],

  change_cabecalho: event => {
    console.log('Função "change_cabecalho" não foi declarada na raiz do Context.Provider.');
  },
  
  change_projeto: event => {
    console.log('Função "change_projeto" não foi declarada na raiz do Context.Provider.');
  },
  
  projetoAddRmv: event => {
    console.log('Função "projetoAddRmv" não foi declarada na raiz do Context.Provider.');
  },
  
  emailAddRmv: event => {
    console.log('Função "emailAddRmv" não foi declarada na raiz do Context.Provider.');
  },

});