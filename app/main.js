//renomear esse doc para requisicoes
const localNaPagina = document.getElementById('projetos__local'); //elemento onde os projetos serão inseridos
const endpointDosRepositorios = 'https://api.github.com/users/M4R0C4/repos'
let arrayProjetos = []


async function getPegarProjetosDoGitHub() { // requisição
  const resposta = await fetch(endpointDosRepositorios)
  arrayProjetos = await resposta.json()
  console.log(arrayProjetos)
  exibirOsProjetosNaPagina(arrayProjetos)
}
function exibirOsProjetosNaPagina(arrayProjetos){
  arrayProjetos.forEach(projeto => {
    localNaPagina.innerHTML += `
      <div class="projetos__item">
        <h3 class="projeto-nome">${projeto.name}</h3>
        <p class="projeto-descricao">${projeto.description}</p>
        <span class="linha"></span>
        <a href="${projeto.clone_url}" class="veja-projeto"><img src="./assets/ferramentas/logo_vercel_icon.svg" alt="">Veja o projeto</a>
        <a href="${projeto.homepage}" class="veja-codigo"><img src="./assets/contatos/github_logo_icon.svg" alt="">Veja o código</a>
      </div>
    `
  })
}
getPegarProjetosDoGitHub()