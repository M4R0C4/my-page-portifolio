//renomear esse doc para requisicoes
const localNaPagina = document.getElementsByClassName('projetos__local');
const endpointDosRepositorios = 'https://api.github.com/users/M4R0C4/repos'
let arrayProjetos = []

async function getPegarProjetosDoGitHub() {
  const resposta = await fetch(endpointDosRepositorios)
  arrayProjetos = await resposta.json()
  console.table(arrayProjetos)
}

 getPegarProjetosDoGitHub()