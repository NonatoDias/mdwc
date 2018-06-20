/**
 * Estrutura de dados utilizado
 */


/* =============  consts ============= */
var countries_ = [
    'França', 
    'Austrália', 
    'Argentina', 
    'Islândia', 
    'Peru', 
    'Dinamarca', 
    'Croácia', 
    'Nigéria', 
    'Costa Rica', 
    'Sérvia', 
    'Alemanha', 
    'México', 
    'Rússia', 
    'Arábia Saudita', 
    'Egito', 
    'Uruguai', 
    'Marrocos', 
    'Irã', 
    'Portugal', 
    'Espanha', 
    'Brasil', 
    'Suíça', 
    'Suécia', 
    'Coreia do Sul', 
    'Bélgica', 
    'Panamá', 
    'Tunísia', 
    'Inglaterra', 
    'Colômbia', 
    'Japão', 
    'Polônia', 
    'Senegal'
]

var opponents_ = [
    {
        id: 'russia',
        text: 'Rússia'
    },
    {
        id: 'japao',
        text: 'Japão'
    },
    {
        id: 'portugal',
        text: 'Portugal'
    },
    {
        id: 'uruguai',
        text: 'Uruguai'
    },
    {
        id: 'franca',
        text: 'França'
    },
    {
        id: 'alemanha',
        text: 'Alemanha'
    },
    {
        id: 'inglaterra',
        text: 'Inglaterra'
    },
]

var opt_itens_ = ['a)', 'b)', 'c)', 'd)'];
var opt_phases_ = [
    'Fase de Grupo - partida 1', 
    'Fase de Grupo - partida 2', 
    'Fase de Grupo - partida 3',
    'Oitavas de final',
    'quartas de final',
    'semifinal',
    'final'
];
var questions_ = [
    {
        q: 'Em que ano foi realizada a primeira copa do mundo?',
        a: 2,
        options:['1934', '1935', '1930', '1895'],
        tipp:'Ocorreu um ano depois da grande depressão da bolsa de Nova Yorque'
    },
    {
        q: 'Depois do Brasil, que participou de todas as copas até hoje, qual o país com mais participações?',
        a: 0,
        options:['Alemanha', 'Uruguai', 'Inglaterra', 'Itália'],
        tipp: 'País natal de Albert Einstein e Max Planck'
    },
    {
        q: 'Em quais anos o Brasil foi campeão do Mundo?',
        a: 3,
        options:['1966, 1980, 2002, 2006 e 2010', '1950, 1954, 1986, 1990 e 2006', '1938, 1970, 1982, 2002 e 1994', '1958, 1962, 1970, 1994 e 2002'],
        tipp: ' Só ganhou um título até agora no século XXI'
    }
    ,
    {
        q: 'Quem foi o artilheiro da copa do mundo em 2016 e com quantos gols?',
        a: 1,
        options:['Alemão Klose (5 gols)', 'Italiano Totti ( 6 gols)', 'Francês Zidane (5 gols) ', ' Brasileiro Kaká (5 gols)'],
        tipp: 'Mesma nacionalidade da última campẽa da copa do mundo '
    },
    {
        q: 'Em quais anos a Argentina foi campeã do Mundo?',
        a: 3,
        options:['1990 e 1994', '1978 e 1986', ' 1970 e 1990', '1979 e 1996'],
        tipp: 'A soma dos anos é 9886'
    },
     {
        q: 'Qual é a seleção classificada para a copa do Mundo 2018 com pior colocação no ranking da Fifa?',
        a: 4,
        options:['Rússia', 'Coréia do Sul', 'Panamá', 'Arábia Saudita'],
        tipp: 'Sua bandeira é verde'
    },
    {
        q: 'Qual o adversário o Brasil enfrentou mais vezes em copas?',
        a: 4,
        options:['Holanda', 'México', 'França', 'Suécia'],
        tipp: 'Na fase de grupos da copa da Rússia 2018, o país está no grupo da Alemanha'
    },
    {
        q: 'Fora as estreantes, qual é a seleção que há mais tempo não se classificava para uma copa do Mundo?',
        a: 2,
        options:['Alemanha x Suécia', 'Argentina x Nigéria', 'Brasil x Costa Rica', 'França x Dinamarca'],
        tipp: 'Na fase de grupos da copa da Rússia 2018, os dois países estão no mesmo grupo'
    },

     {
        q: 'Contabilizando 2018, qual é o confronto mais repetido em primeiras fases?',
        a: 1,
        options:['Peru', 'Sérvia', 'Marrocos', 'Egito'],
        tipp: 'Tem como um dos artilheiros o jogador Guerrero'
    },
    {
        q: 'Qual jogador marcou mais gols pelo Brasil?',
        a: 1,
        options:['Pelé', 'Neymar', 'Romário', 'Ronaldo'],
        tipp: 'Começou jogando no Santos'
    }
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  shuffle(opponents_);
countries_.sort();