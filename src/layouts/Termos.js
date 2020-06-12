import React from 'react'
import { Helmet } from 'react-helmet';
/*
trocar 'Nove Folhas' por 'Nove Folhas'
trocar 'Nove Folhas' por 'Nove Folhas'
*/
export class Termos extends React.Component {
  state = {
    email: 'hugobrancowb@gmail.com',
    mailto: 'mailto:hugobrancowb@gmail.com',
    emailhugo: 'hugobrancowb@gmail.com',
    mailtohugo: 'mailto:hugobrancowb@gmail.com'
  }
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Nove Folhas | Termos de Consentimento</title>
          <meta name="description"
          content="Termos de consentimento para uso e tratamento de dados pessoais da plataforma Nove Folhas."/>
        </Helmet>
        <section id="sobre">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Termo de consentimento para uso e tratamento de dados pessoais</h2>

                <p>Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o Titular concorda com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de Dados Pessoais (LGPD).</p>

                <p>Ao preencher qualquer formulário apresentado nesta plataforma, o usuário do site (doravante denominado Titular) aceita o presente termo, consente e concorda que a empresa Nove Folhas (<a href={ this.state.mailto }>{ this.state.email }</a>), doravante denominada Controlador, tome decisões referentes ao tratamento de seus dados pessoais, bem como realize o tratamento de seus dados pessoais, envolvendo operações como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</p>

                <h4>Dados Pessoais</h4>
                <p>O Controlador fica autorizado a tomar decisões referentes ao tratamento e a realizar o tratamento dos seguintes dados pessoais do Titular:</p>
                <ul>
                  <li>Nome de usuário e senha específicos para uso dos serviços do Controlador.</li>
                  <li>Nome completo (somente quando necessário para uso exclusivo do Controlador).</li>
                  <li>Endereço completo (somente quando necessário para uso exclusivo do Controlador).</li>
                  <li>Números de telefone (somente quando necessário para uso exclusivo do Controlador).</li>
                  <li>Endereços de email (somente quando necessário para uso exclusivo do Controlador).</li>
                  <li>Nível de instrução ou escolaridade.</li>
                  <li>Comunicação, verbal e escrita, mantida entre o Titular e o Controlador.</li>
                </ul>

                <h4>Finalidades do Tratamento dos Dados</h4>
                <p>O tratamento dos dados pessoais listados neste termo tem as seguintes finalidades:</p>
                <ul>
                  <li>I - Possibilitar que o Controlador identifique e entre em contato com o Titular para fins de relacionamento comercial.</li>
                  <li>II - Possibilitar que o Controlador elabore contratos comerciais e emita cobranças contra o Titular.</li>
                  <li>III - Possibilitar que o Controlador envie ou forneça ao Titular seus produtos e serviços, de forma remunerada ou gratuita.</li>
                  <li>IV - Possibilitar que o Controlador estruture, teste, promova e faça propaganda de produtos e serviços, personalizados ou não ao perfil do Titular.</li>
                </ul>

                <h4>Compartilhamento de Dados</h4>
                <p>O Controlador fica autorizado a compartilhar os dados pessoais do Titular com outros agentes de tratamento de dados, caso seja necessário para as finalidades listadas neste termo, observados os princípios e as garantias estabelecidas pela Lei nº 13.709.</p>

                <h4>Segurança dos Dados</h4>
                <p>O Controlador responsabiliza-se pela manutenção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.</p>
                <p>Em conformidade ao art. 48 da Lei nº 13.709, o Controlador comunicará ao Titular e à Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante ao Titular.</p>

                <h4>Término do Tratamento dos Dados</h4>
                <p>O Controlador poderá manter e tratar os dados pessoais do Titular durante todo o período em que os mesmos forem pertinentes ao alcance das finalidades listadas neste termo. Dados pessoais anonimizados, sem possibilidade de associação ao indivíduo, poderão ser mantidos por período indefinido.</p>
                <p>O Titular poderá solicitar via email ou correspondência ao Controlador, a qualquer momento, que sejam eliminados os dados pessoais não anonimizados do Titular. O Titular fica ciente de que poderá ser inviável ao Controlador continuar o fornecimento de produtos ou serviços ao Titular a partir da eliminação dos dados pessoais.</p>

                <h4>Direitos do Titular</h4>
                <p>O Titular tem direito a obter do Controlador, em relação aos dados por ele tratados, a qualquer momento e mediante requisição:</p>
                <ul>
                  <li>I - confirmação da existência de tratamento;</li>
                  <li>II - acesso aos dados;</li>
                  <li>III - correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>IV - anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei nº 13.709;</li>
                  <li>V - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e observados os segredos comercial e industrial, de acordo com a regulamentação do órgão controlador;</li>
                  <li>VI - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial; VI - eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da Lei nº 13.709;</li>
                  <li>VII - informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>
                  <li>VIII - informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
                  <li>IX - revogação do consentimento, nos termos do § 5º do art. 8º da Lei nº 13.709.</li>
                </ul>

                <h4>Direito de Revogação do Consentimento</h4>
                <p>Este consentimento poderá ser revogado pelo Titular, a qualquer momento, mediante solicitação via email da empresa (<a href="mailto:contato@novefolhas.com">contato@novefolhas.com</a>) ou de nosso <i>Data Protection Officer</i> (<a href={ this.state.mailtohugo }>{ this.state.emailhugo }</a>).</p>

              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      )
  }
}

export default Termos