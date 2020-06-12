import React from 'react';
import FormularioContext from '../../layouts/FormularioContext';
import SingleInputTyped from './inputs/SingleInputTyped';
import SingleInputArray from './inputs/SingleInputArray';

export class Cabecalho extends React.PureComponent {

  render() {
    return (
      <FormularioContext.Consumer>{context => (
        
        <div className="divisao-area">

          {/* Nome */}
          <SingleInputTyped
          name = 'nome'
          label = 'Nome completo'
          value = { context.state.cabecalho.nome }
          change = { context.change_cabecalho }
          type = 'txt'
          />

          {/* Cidade */}
          <SingleInputTyped
          name = 'cidade'
          label = 'Cidade'
          value = { context.state.cabecalho.cidade }
          change = { context.change_cabecalho }
          type = 'txt'
          />

          {/* Estado */}
          {/* Criar dropdown list com siglas dos estados */}
          <div className='estado half'>
            <label>Estado</label>
            <div className="input-group">
              <select className="custom-select"
              onChange={ context.change_cabecalho }
              value={ context.state.cabecalho.estado }
              name='estado'
              >              
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </div>

          {/* Site/Portfólio */}
          <SingleInputArray
          name = 'site'
          label = 'Site ou Portfólio'
          placeholder = 'Ex.: seuportfolio.com.br'
          array = { context.state.cabecalho.site }
          change = { context.change_cabecalho}
          clickAddRmv = {context.clickAddRmv}
          type = 'txt'
          />

          {/* Email */}
          <SingleInputArray
          name = 'email'
          label = 'Email'
          array = { context.state.cabecalho.email }
          change = { context.change_cabecalho }
          clickAddRmv = {context.clickAddRmv}
          type = 'email'
          />

          {/* Telefone */}
          <SingleInputArray
          name = 'telefone'
          label = 'Telefone'
          placeholder = 'Ex.: (99) 98888-8888'
          array = { context.state.cabecalho.telefone }
          change = { context.change_cabecalho }
          clickAddRmv = {context.clickAddRmv}
          type = 'tel'
          />

        </div>
      )}</FormularioContext.Consumer>
    )
  }
}

export default Cabecalho