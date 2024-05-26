const container = document .querySelector('#Header');
const titulo = document.createElement('h1')

titulo.textContent = 'Squirtle';
container.appendChild(titulo);

// =========== NAV ===========

const navPrincipal = document.querySelector('#navPrincipal');
const nav = document.createElement('nav');
const navUl = document.createElement('ul');

const opcoes = [
  { nome: 'Informações sobre Squirtle', url: '#Informacao' },
  { nome: 'Características', url: '#Caracteristicas' },
  { nome: 'Curiosidade', url: '#Curiosidade' },
  { nome: 'Artigos sobre Squirtle', url: '#Artigos' },
  { nome: 'Recursos Adicionais', url: '#Recursos' },
  { nome: 'Evolução', url: '#Evolucao' }
];

opcoes.forEach(opcao => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = opcao.nome;
  a.href = opcao.url;
  li.appendChild(a);
  navUl.appendChild(li);
});

nav.appendChild(navUl);
container.appendChild(nav);

// =========== SECTION ===========

const section = document.getElementById('Informacao');
const novaSection = document.createElement('section');

novaSection.classList.add('informacao');
section.appendChild(novaSection);  

const h2 = document.createElement('h2');

h2.textContent = 'Informações sobre Squirtle';
novaSection.appendChild(h2);

const novaDiv = document.createElement('div');

novaDiv.classList.add('Squirtle-img');

const img1 = document.createElement('img');
img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png';
img1.alt = 'Squirtle - Pokémon Aquático';
img1.id = 'info-squirtle';

const img2 = document.createElement('img');
img2.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png';
img2.alt = 'Squirtle - Pokémon Aquático';
img2.id = 'info-squirtle';

novaDiv.appendChild(img1);
novaDiv.appendChild(img2);

novaSection.appendChild(novaDiv);

const novoParagrafo = document.createElement('p');

novoParagrafo.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.'
novaSection.appendChild(novoParagrafo);

// =========== CARACTERISTICAS ===========

const caracteristicas = document.getElementById('Caracteristicas');
const novaCaracteristica = document.createElement('section');

novaCaracteristica.classList.add('caracteristicas');
caracteristicas.appendChild(novaCaracteristica);

const h2Caracteristicas = document.createElement('h2');

h2Caracteristicas.textContent = 'Características';
novaCaracteristica.appendChild(h2Caracteristicas);

const novaDivCaracteristicas = document.createElement('div');

novaDivCaracteristicas.classList.add('Squirtle-img');

novaCaracteristica.appendChild(novaDivCaracteristicas);

const novoParagrafoCaracteristicas = document.createElement('p');

novoParagrafoCaracteristicas.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.'  
novaCaracteristica.appendChild(novoParagrafoCaracteristicas);

// =========== CURIOSIDADE ===========

const curiosidade = document.getElementById('Curiosidade');
const novaCuriosidade = document.createElement('section');

novaCuriosidade.classList.add('curiosidade');
curiosidade.appendChild(novaCuriosidade);

const h2Curiosidade = document.createElement('h2');

h2Curiosidade.textContent = 'Curiosidade';
novaCuriosidade.appendChild(h2Curiosidade);

const novaUlCuriosidade = document.createElement('ul');

const curiosidades = [
  'Squirtle é um dos Pokémon mais populares e adoráveis.',
  'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
  'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
];

curiosidades.forEach(curiosidade => {
  const li = document.createElement('li');
  li.textContent = '🔍 ' + curiosidade;
  novaUlCuriosidade.appendChild(li);
});

novaCuriosidade.appendChild(novaUlCuriosidade);

// ========== ARTIGOS ===========

const artigos = document.getElementById('Artigos');
const novaArtigos = document.createElement('section');

novaArtigos.classList.add('artigos');
artigos.appendChild(novaArtigos);

const h2Artigos = document.createElement('h2');

h2Artigos.textContent = 'Squirtle: O Amigo Aquático';
novaArtigos.appendChild(h2Artigos);

const p1 = document.createElement('p');
p1.textContent = 'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.';
novaArtigos.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.';
novaArtigos.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.';
novaArtigos.appendChild(p3);

// ========== RECURSOS ADICIONAIS ===========

const recursosAdicionais = document.getElementById('Recursos');
const novaRecursosAdicionais = document.createElement('section');

novaRecursosAdicionais.classList.add('recursos-adicionais');
recursosAdicionais.appendChild(novaRecursosAdicionais);

const h2RecursosAdicionais = document.createElement('h2');

h2RecursosAdicionais.textContent = 'Recursos Adicionais';
novaRecursosAdicionais.appendChild(h2RecursosAdicionais);

const novaUlRecursosAdicionais = document.createElement('ul');

const recursos = [
  { nome: 'Pokédex - Squirtle', url: 'https://www.pokemon.com/br/pokedex/squirtle'},
  { nome: 'Bulbapedia - Squirtle', url: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)' }
];

recursos.forEach(recurso => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = recurso.nome;
  a.href = recurso.url;
  li.appendChild(a);
  novaUlRecursosAdicionais.appendChild(li);
});

novaRecursosAdicionais.appendChild(novaUlRecursosAdicionais);

// ========== EVOLUÇÃO ===========

const evolucao = document.getElementById('Evolucao');
const novaEvolucao = document.createElement('section');

novaEvolucao.classList.add('evolucao');
evolucao.appendChild(novaEvolucao);

const h2Evolucao = document.createElement('h2');

h2Evolucao.textContent = 'Evolução';
novaEvolucao.appendChild(h2Evolucao);

const novaDivEvolucao = document.createElement('div');

novaDivEvolucao.classList.add('evolucao-img');

const img3 = document.createElement('img');
img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png';
img3.alt = 'Wartortle - Pokémon Aquático';
img3.id = 'evolucao-wartortle';

const span1 = document.createElement('span');
span1.textContent = '1.Squirtle';

novaDivEvolucao.appendChild(img3);
novaDivEvolucao.appendChild(span1);

const img4 = document.createElement('img');
img4.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png';
img4.alt = 'Blastoise - Pokémon Aquático';
img4.id = 'evolucao-blastoise';

const span2 = document.createElement('span');
span2.textContent = '3.Blastoise';

const img5 = document.createElement('img');
img5.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png';
img5.alt = 'Mega Blastoise - Pokémon Aquático';
img5.id = 'evolucao-mega-blastoise';

const span3 = document.createElement('span');
span3.textContent = '2.Wartortle';

novaDivEvolucao.appendChild(img5);
novaDivEvolucao.appendChild(span3);

novaDivEvolucao.appendChild(img4);
novaDivEvolucao.appendChild(span2);

novaEvolucao.appendChild(novaDivEvolucao);

// ========== FOOTER ===========

const footer = document.querySelector('footer'); 
const footerDiv = document.createElement('div');

footerDiv.classList.add('footer'); 
footer.appendChild(footerDiv);

const a1 = document.createElement('a'); 
a1.textContent = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados';  
footerDiv.appendChild(a1);

const a2 = document.createElement('a'); 
a2.textContent = 'Voltar para o topo'; 
a2.href = '#Header'; 
footerDiv.appendChild(a2);

const a3 = document.createElement('a'); 
a3.textContent = 'Contado via e-mail'; 
a3.href = '#'; 
footerDiv.appendChild(a3);

const a4 = document.createElement('a'); 
a4.textContent = 'Telefone: (55) 5555-5555'; 
a4.href = '#'; 
footerDiv.appendChild(a4);