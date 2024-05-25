// Seleciona o elemento com id "container"
const container = document.querySelector('#container');

// Cria um novo elemento <h1>
const novoTitulo = document.createElement('h1');

// Define o texto do novo título
novoTitulo.textContent = 'Squirtle';

// Anexa o novo título ao container
container.appendChild(novoTitulo);

// ======== NAV ==========

// Seleciona o elemento com id "container"
const NavPrincipal = document.querySelector('#NavPrincipal');

// Cria um novo elemento <nav>
const novoNav = document.createElement('nav');

// Cria uma lista não ordenada <ul>
const ul = document.createElement('ul');

// Define as opções do menu com seus respectivos links
const opcoes = [
    { nome: 'Informações sobre Squirtle', url: '#' },
    { nome: 'Características', url: '#' },
    { nome: 'Curiosidade', url: '#' },
    { nome: 'Artigos sobre Squirtle', url: '#' },
    { nome: 'Recursos Adicionais', url: '#' },
    { nome: 'Evolução', url: '#' }
];

// Itera sobre as opções e cria um item de lista <li> com um link <a> para cada uma
opcoes.forEach(opcao => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = opcao.nome;
    a.href = opcao.url;
    li.appendChild(a);
    ul.appendChild(li);
});

// Anexa a lista <ul> ao <nav>
novoNav.appendChild(ul);

// Anexa o <nav> ao container
container.appendChild(novoNav);


// ================== Section =================

  // Seleciona o elemento main pelo ID
const mainContent = document.getElementById('Informacao');

// Cria um novo elemento section
const newSection = document.createElement('section');

// Adiciona uma classe ao novo section, se necessário
newSection.classList.add('nova-section');

// Anexa o novo section ao main
mainContent.appendChild(newSection);

// Cria um novo elemento h2
const newHeading = document.createElement('h2');

// Define o texto do novo elemento h2
newHeading.textContent = 'Informações do Squirtle';

// Anexa o novo h2 ao section
newSection.appendChild(newHeading);

// Cria um novo elemento div
const newDiv = document.createElement('div');

// Adiciona uma classe à nova div, se necessário
newDiv.classList.add('squirtle-img');

// Cria uma nova imagem 1
const img1 = document.createElement('img');
img1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
img1.alt = 'Squirtle - Pokemon de Água';

// Cria uma nova imagem 2
const img2 = document.createElement('img');
img2.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png';
img2.alt = 'Squirtle - Pokemon de Agua';

// Anexa as imagens à nova div
newDiv.appendChild(img1);
newDiv.appendChild(img2);

// Anexa a nova div ao section
newSection.appendChild(newDiv);

// Cria um novo elemento p
const newParagraph = document.createElement('p');

// Define o texto do novo elemento p
newParagraph.textContent = ' Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';

// Anexa o novo p ao section
newSection.appendChild(newParagraph);

// ================== Section 2 =================

  // Seleciona o elemento main pelo ID
  const mainContent2 = document.getElementById('Caracteristicas');

  // Cria um novo elemento section
  const newSection2 = document.createElement('Caracteristicas');
  
  // Adiciona uma classe ao novo section, se necessário
  newSection2.classList.add('nova-section');
  
  // Anexa o novo section ao main
  mainContent2.appendChild(newSection2);
  
  // Cria um novo elemento h2
  const newHeading2 = document.createElement('h2');
  
  // Define o texto do novo elemento h2
  newHeading2.textContent = 'Caracteristicas';
  
  // Anexa o novo h2 ao section
  newSection2.appendChild(newHeading2);
  
  // Cria um novo elemento div
  const newDiv2 = document.createElement('div');
  
  // Adiciona uma classe à nova div, se necessário
  newDiv2.classList.add('squirtle-img');
  
  // Anexa a nova div ao section
  newSection2.appendChild(newDiv2);
  
  // Cria um novo elemento p
  const newParagraph2 = document.createElement('p');
  
  // Define o texto do novo elemento p
  newParagraph2.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';
  
  // Anexa o novo p ao section
  newSection2.appendChild(newParagraph2);

  // =========== Curiosidade =================
 
  // =========== Artigo ================

  // Criar um novo elemento article
const novoArticle = document.createElement('article');

// Criar um novo elemento h2 para o título do artigo
const h2Artigo = document.createElement('h2');
h2Artigo.textContent = 'Squirtle: O Amigo Aquático';

// Adicionar o h2 ao article
novoArticle.appendChild(h2Artigo);

// Criar três parágrafos para o artigo
const p1 = document.createElement('p');
p1.textContent = ' Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.';
novoArticle.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.';
novoArticle.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.';
novoArticle.appendChild(p3);

// Definir o ID do article como "artigo"
novoArticle.id = 'artigo';

// Adicionar uma classe ao article, se necessário
novoArticle.classList.add('outra-section');

// Anexar o article ao main
mainContent.appendChild(novoArticle);

//============== Recursos Adicionais ================

// Criar uma nova section
const novaSection = document.createElement('section');

// Criar um novo elemento h2 para o título da section
const h2Section = document.createElement('h2');
h2Section.textContent = 'Título da Seção';

// Adicionar o h2 à section
novaSection.appendChild(h2Section);

// Criar uma lista não ordenada
const listaLinks = document.createElement('ul');

// Criar um link que contém outros elementos dentro dele
const linkContainer1 = document.createElement('a');
linkContainer1.href = '#';

// Criar um item de lista e adicionar o link ao item
const item1 = document.createElement('li');
item1.appendChild(linkContainer1);

// Criar um link dentro do primeiro link-container
const link1 = document.createElement('a');
link1.href = 'https://www.pokemon.com/br/pokedex/squirtle';
link1.textContent = 'Pokédex - Squirtle';

// Adicionar o link1 ao link-container1
linkContainer1.appendChild(link1);

// Repetir o processo para o segundo link
const linkContainer2 = document.createElement('a');
linkContainer2.href = '#';

const item2 = document.createElement('li');
item2.appendChild(linkContainer2);

const link2 = document.createElement('a');
link2.href = 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)';
link2.textContent = 'Bulbapedia - Squirtle';

linkContainer2.appendChild(link2);

// Adicionar os itens à lista
listaLinks.appendChild(item1);
listaLinks.appendChild(item2);

// Adicionar a lista à section
novaSection.appendChild(listaLinks);

// Adicionar a section ao main
mainContent.appendChild(novaSection);

// ============== Evolução ==========

// Criar uma nova section
const sectionEvo = document.createElement('section');

// Criar a primeira imagem
const imagem1 = document.createElement('img');
imagem1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png';
imagem1.alt = 'Squirtle - Pokémon Aquático';
imagem1.classList.add('evolucao');

// Criar um span para a primeira imagem
const span1 = document.createElement('span');
span1.textContent = '1.Squirtle';

// Anexar a imagem e o span à section
sectionEvo.appendChild(imagem1);
sectionEvo.appendChild(span1);

// Criar a segunda imagem
const imagem2 = document.createElement('img');
imagem2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png';
imagem2.alt = 'Squirtle - Pokémon Aquático';
imagem2.classList.add('evolucao');

// Criar um span para a segunda imagem
const span2 = document.createElement('span');
span2.textContent = '2.Wartortle';

// Anexar a imagem e o span à section
sectionEvo.appendChild(imagem2);
sectionEvo.appendChild(span2);

// Criar a terceira imagem
const imagem3 = document.createElement('img');
imagem3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png';
imagem3.alt = 'Squirtle - Pokemon Aquático';
imagem3.classList.add('evolucao');

// Criar um span para a terceira imagem
const span3 = document.createElement('span');
span3.textContent = '3.Blastoise';

// Anexar a imagem e o span à section
sectionEvo.appendChild(imagem3);
sectionEvo.appendChild(span3);

// Adicionar a section ao main
mainContent.appendChild(sectionEvo);




