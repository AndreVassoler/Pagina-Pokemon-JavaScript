
const container = document.querySelector('#container');

const novoTitulo = document.createElement('h1');

novoTitulo.textContent = 'Squirtle';

container.appendChild(novoTitulo);

// ======== NAV ==========

const NavPrincipal = document.querySelector('#NavPrincipal');

const novoNav = document.createElement('nav');

const ul = document.createElement('ul');

const opcoes = [
    { nome: 'Informações sobre Squirtle', url: '#' },
    { nome: 'Características', url: '#' },
    { nome: 'Curiosidade', url: '#' },
    { nome: 'Artigos sobre Squirtle', url: '#' },
    { nome: 'Recursos Adicionais', url: '#' },
    { nome: 'Evolução', url: '#' }
];

opcoes.forEach(opcao => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = opcao.nome;
    a.href = opcao.url;
    li.appendChild(a);
    ul.appendChild(li);
});

novoNav.appendChild(ul);

container.appendChild(novoNav);


// ================== Section =================

const mainContent = document.getElementById('Informacao');

const newSection = document.createElement('section');

newSection.classList.add('nova-section');

mainContent.appendChild(newSection);

const newHeading = document.createElement('h2');

newHeading.textContent = 'Informações do Squirtle';

newSection.appendChild(newHeading);

const newDiv = document.createElement('div');

newDiv.classList.add('squirtle-img');

const img1 = document.createElement('img');
img1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
img1.alt = 'Squirtle - Pokemon de Água';

const img2 = document.createElement('img');
img2.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png';
img2.alt = 'Squirtle - Pokemon de Agua';

newDiv.appendChild(img1);
newDiv.appendChild(img2);

newSection.appendChild(newDiv);

const newParagraph = document.createElement('p');

newParagraph.textContent = ' Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';

newSection.appendChild(newParagraph);

// ================== Section 2 =================

  const mainContent2 = document.getElementById('Caracteristicas');

  const newSection2 = document.createElement('Caracteristicas');
  
  newSection2.classList.add('nova-section');
  
  mainContent2.appendChild(newSection2);
  
  const newHeading2 = document.createElement('h2');
  
  newHeading2.textContent = 'Caracteristicas';
  
  newSection2.appendChild(newHeading2);
  
  const newDiv2 = document.createElement('div');
  
  newDiv2.classList.add('squirtle-img');
  
  newSection2.appendChild(newDiv2);
  
  const newParagraph2 = document.createElement('p');
  
  newParagraph2.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';
  
  newSection2.appendChild(newParagraph2);

  // =========== Curiosidade =================
 
  // =========== Artigo ================

const novoArticle = document.createElement('article');

const h2Artigo = document.createElement('h2');
h2Artigo.textContent = 'Squirtle: O Amigo Aquático';

novoArticle.appendChild(h2Artigo);

const p1 = document.createElement('p');
p1.textContent = ' Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.';
novoArticle.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.';
novoArticle.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.';
novoArticle.appendChild(p3);

novoArticle.id = 'artigo';

novoArticle.classList.add('outra-section');

mainContent.appendChild(novoArticle);

//============== Recursos Adicionais ================

const novaSection = document.createElement('section');

const h2Section = document.createElement('h2');
h2Section.textContent = 'Título da Seção';

novaSection.appendChild(h2Section);

const listaLinks = document.createElement('ul');

const linkContainer1 = document.createElement('a');
linkContainer1.href = '#';

const item1 = document.createElement('li');
item1.appendChild(linkContainer1);

const link1 = document.createElement('a');
link1.href = 'https://www.pokemon.com/br/pokedex/squirtle';
link1.textContent = 'Pokédex - Squirtle';

linkContainer1.appendChild(link1);

const linkContainer2 = document.createElement('a');
linkContainer2.href = '#';

const item2 = document.createElement('li');
item2.appendChild(linkContainer2);

const link2 = document.createElement('a');
link2.href = 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)';
link2.textContent = 'Bulbapedia - Squirtle';

linkContainer2.appendChild(link2);

listaLinks.appendChild(item1);
listaLinks.appendChild(item2);

novaSection.appendChild(listaLinks);

mainContent.appendChild(novaSection);

// ============== Evolução ==========

const sectionEvo = document.createElement('section');

const imagem1 = document.createElement('img');
imagem1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png';
imagem1.alt = 'Squirtle - Pokémon Aquático';
imagem1.classList.add('evolucao');

const span1 = document.createElement('span');
span1.textContent = '1.Squirtle';

sectionEvo.appendChild(imagem1);
sectionEvo.appendChild(span1);

const imagem2 = document.createElement('img');
imagem2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png';
imagem2.alt = 'Squirtle - Pokémon Aquático';
imagem2.classList.add('evolucao');

const span2 = document.createElement('span');
span2.textContent = '2.Wartortle';

sectionEvo.appendChild(imagem2);
sectionEvo.appendChild(span2);

const imagem3 = document.createElement('img');
imagem3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png';
imagem3.alt = 'Squirtle - Pokemon Aquático';
imagem3.classList.add('evolucao');

const span3 = document.createElement('span');
span3.textContent = '3.Blastoise';

sectionEvo.appendChild(imagem3);
sectionEvo.appendChild(span3);

mainContent.appendChild(sectionEvo);




