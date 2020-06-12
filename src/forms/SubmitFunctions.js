function sanitize(string) {
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

function date_string(data) {
  let output = data.toLocaleDateString("pt-BR", {year: "numeric", month: "long", day: "2-digit"});
  output = output.substring(6);
  output = output.charAt(0).toUpperCase() + output.slice(1);
  output = output.split(' ');
  
  let abrev = output[0].substring(0,3) + './' + output[2];
  
  return abrev;
}

async function submitForm(state) {  
  if(!state.termos){return}
  const tema = state.tema;

  let page = '';
  page += '<page id="a4page" size="A4"> <div id="' + tema + '">';

  /*** CABECALHO ***/
  page += '<div id="cabecalho">';
    // nome
    page += '<p class="nome">' + sanitize(state.cabecalho.nome) + '</p>';
    // endereco
    if(state.cabecalho.cidade || state.cabecalho.estado) {
      page += '<p class="endereco">';
       if(state.cabecalho.cidade) {page += sanitize(state.cabecalho.cidade);}
       if(state.cabecalho.cidade && state.cabecalho.estado) {page += ' – ';}
       if(state.cabecalho.estado) {page += sanitize(state.cabecalho.estado);}
       page += '</p>';
    }
    // sites
    if(state.cabecalho.site.length > 0) {
      state.cabecalho.site.map( site => {
        if( site.value !== '' ) {
          page += '<p class="site">' + sanitize(site.value) + '</p>';
        }
        return '';
      });
    }
    // emails
    if(state.cabecalho.email.length > 0) {
      state.cabecalho.email.map( email => {
        if( email.value !== '' ) {
          page +=  '<p class="email">' + sanitize(email.value) + '</p>';
        }
        return ''
      });
    }
    // telefones
    if(state.cabecalho.telefone.length > 0) {
      state.cabecalho.telefone.map( telefone => {
        if( telefone.value !== '' ) {
          page +=  '<p class="telefone">' + sanitize(telefone.value) + '</p>';
        }
        return ''
      });
    }
  page += '</div>'; /* cabecalho */

  /*** EDUCAÇÃO / FORMAÇÃO ***/
  if (state.educacao.length > 0) {
    page += '<div id="educacao" class="secao"> <h2>Formação</h2>';
    state.educacao.map(educacao => {
      page += '<div class="cell">';

      page += '<p class="soft-title">';
      if (educacao.titulo.localeCompare('Outro')) {
        page += sanitize(educacao.titulo_outro);
      } else {
        page += sanitize(educacao.titulo);
      }
      page += ' <span>em</span> ';
      page += sanitize(educacao.curso);
      page += '</p>'; /* soft-title */

      page += '<p class="corpo">';
      page += sanitize(educacao.instituicao);
      page += '</p>'; /* corpo */
      
      if(educacao.inicio || educacao.fim) {
        page += '<p class="duracao">';
        if(educacao.inicio) {page += date_string(educacao.inicio);}
        if(educacao.inicio && educacao.fim) {page += ' – ';}
        if(educacao.fim) {
          if(educacao.atual) {page += 'Atual';}
          else {page += date_string(educacao.fim);}          
        }
        page += '</p>'; /* duracao */
      }

      page += '</div>'; /* cell */
      return '';
    });
    page += '</div>'; /* secao */
  }

  /*** OBJETIVO ***/
  if (state.objetivo.length > 0) {
    page += '<div id="objetivo" class="secao"> <h2>Objetivo</h2>';
    page += '<p class="corpo">' + sanitize(state.objetivo) + '</p>';
    page += '</div>'; /* secao */
  }

  /*** EXPERIÊNCIA ACADÊMICA ***/
  if (state.experiencia_academica.length > 0) {
    page += '<div id="experiencia-academica" class="secao"> <h2>Atividades de aperfeiçoamento</h2>';

    state.experiencia_academica.map(experiencia => {
      page += '<div class="cell">';
      //duracao
      if(experiencia.data || experiencia.carga) {
        page += '<p class="duracao">';
        if(experiencia.data) {page += date_string(experiencia.data);}
        if(experiencia.data && experiencia.carga) {page += ' – ';}
        if(experiencia.carga) {page += sanitize(experiencia.carga) + ' horas';}
        page += '</p>'; /* duracao */
      }
      //titulo e instituição
      if(experiencia.titulo || experiencia.instituicao) {
        page += '<p class="soft-title">';
        if(experiencia.titulo) {page += sanitize(experiencia.titulo);}
        if(experiencia.titulo && experiencia.instituicao) {page += ' – ';}
        if(experiencia.instituicao) {page += sanitize(experiencia.instituicao);}
        page += '</p>'; /* soft-title */
      }
      //descricao
      if(experiencia.descricao) {
        page += '<p class="corpo">'+ sanitize(experiencia.descricao) +'</p>';
      }
      
      page += '</div>'; /* cell */
      return ''
    });

    page += '</div>'; /* secao */
  }

  /*** EXPERIÊNCIA PROFISSIONAL ***/
  if (state.experiencia_profissional.length > 0) {
    page += '<div id="formacao-profissional" class="secao"> <h2>Experiência profissional</h2>';

    state.experiencia_profissional.map(experiencia => {
      page += '<div class="cell">';
      //duracao
      if(experiencia.inicio || experiencia.fim) {
        page += '<p class="duracao">';
        if(experiencia.inicio) {page += date_string(experiencia.inicio);}
        if(experiencia.inicio && experiencia.fim) {page += ' – ';}
        if(experiencia.fim) {
          if(experiencia.atual) {page += 'Atual';}
          else {page += date_string(experiencia.fim);}
        }
        page += '</p>'; /* duracao */
      }
      //cargo e empresa
      if(experiencia.cargo || experiencia.empresa) {
        page += '<p class="soft-title">';
        if(experiencia.cargo) {page += sanitize(experiencia.cargo);}
        if(experiencia.cargo && experiencia.empresa) {page += ' – ';}
        if(experiencia.empresa) {page += sanitize(experiencia.empresa);}
        page += '</p>'; /*soft-title */
      }
      //descricao
      if(experiencia.descricao) {
        page += '<p class="corpo">'+ sanitize(experiencia.descricao) +'</p>';
      }
      
      page += '</div>'; /* cell */
      return ''
    });

    page += '</div>'; /* secao */
  }

  /*** IDIOMAS ***/
  if (state.idiomas.length > 0) {
    page += '<div id="idiomas" class="secao"> <h2>Idiomas</h2>';
    state.idiomas.map(idiomas => {
      page += '<div class="cell">';
      //duracao
      page += '<p><b>' + sanitize(idiomas.lingua) + '</b> – ' + sanitize(idiomas.nivel) + '</p>';
      page += '</div>'; /* cell */
      return ''
    })
    page += '</div>'; /* secao */
  }

  /*** QUALIFICAÇÕES ***/
  if (state.qualificacoes.length > 0) {
    page += '<div id="qualificacoes" class="secao"> <h2>Habilidades</h2>';
    state.qualificacoes.map(qualificacoes => {
      page += '<div class="cell">';
      //duracao
      page += '<p>-  ' + sanitize(qualificacoes.value) + '</p>';
      page += '</div>'; /* cell */
      return ''
    })
    page += '</div>'; /* secao */
  }

  /*** EVENTOS ***/
  if (state.eventos.length > 0) {
    page += '<div id="eventos" class="secao"> <h2>Eventos</h2>';
    state.eventos.map(eventos => {
      page += '<div class="cell">';

      if(eventos.data) {
        page += '<p class="duracao">' + date_string(eventos.data) + '</p>';
      }

      if(eventos.descricao) {
        page += '<p class="corpo">' + sanitize(eventos.descricao) + '</p>';
      }
      page += '</div>'; /* cell */


      return ''
    })
    page += '</div>'; /* secao */
  }

  /*** PROJETOS ***/
  if (state.projetos.length > 0) {
    page += '<div id="projetos" class="secao"> <h2>Projetos</h2>';
    state.projetos.map(projetos => {
      page += '<div class="cell">';
      //titulo
      page += '<p class="titulo soft-title">' + sanitize(projetos.titulo) + '</p>';
      //descricao
      page += '<p class="descricao corpo">' + sanitize(projetos.descricao) + '</p>';
      //link
      if(projetos.link) {
        page += '<p class="link">' + sanitize(projetos.link) + '</p>';
      }
      page += '</div>'; /* cell */
      return ''
    })
    page += '</div>'; /* secao */
  }
  
  /* Final */
  page += '</div>'; /* div#TEMA */

  page += '</page>';
  
  /* teste */
  let target = document.getElementById('cvgen');
  target.innerHTML = page;
  
  let tag = document.createElement('script');
  let time_el = new Date().getMilliseconds();
  time_el = 'e' + time_el.toString();
  tag.innerHTML = 'let ' + time_el + ' = document.getElementById("a4page");';
  
  tag.innerHTML += 'var opt = { margin: 0, image: { type: "png", quality: 1 }, html2canvas: { scale: 2 }, pagebreak: {avoid: ".secao"}, jsPDF: { unit: "in", format: "a4", orientation: "portrait" } };';
  
  tag.innerHTML += 'html2pdf().set(opt).from(' + time_el + ').save();';

  var elem = document.getElementById('cvgen');
  elem.appendChild(tag);

  return true;
}

export default submitForm;